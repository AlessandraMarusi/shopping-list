import { useState, useRef, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import SwapCheck from "../components/SwapCheck";
import AddProductForm from "../components/AddProductForm";
import React from "react";
import "../styles/ingredientListStyle.scss";
import ProductInfo from "../components/ProductInfo";

const ThemeContext = React.createContext("light");

const IngredientList = () => {
  // Set products to the current data saved in LocalLtorage
  const [products, setProducts] = useState<
    { name: string; quantity: string; marked: boolean }[]
  >(JSON.parse(localStorage.getItem("products") || "[]"));
  //Used for re-rendering page on products change
  const [length, setLength] = useState(products.length);

  const [checkedItems, setCheckedItem] = useState<string[]>([]);

  const checkRefs: any = useRef([]);

  const [markedProducts, setMarkedProducts] = useState(0);

  // Get newProducts from DeleteButton(products array without the deleted element) and update LocalStorage
  const handleDelete = (
    newProducts: { name: string; quantity: string; marked: boolean }[]
  ) => {
    setProducts(newProducts);
    setLength(
      products.length
    ); /* Creato unicamente per l'update del render senza dover duplicare l'array */
    localStorage.setItem("products", JSON.stringify(products));
  };

  /* handle the checklist arrays */
  const handleCheck = (value: string) => {
    /* IF is EMPTY */
    if (checkedItems.length === 0) {
      setCheckedItem((prevcheckedItems) => {
        const nextcheckedItems = [...prevcheckedItems, value];
        return nextcheckedItems;
      });
      return;
    }
    /* IF already in the array, empty the array*/
    if (checkedItems.some((el) => el === value)) {
      setCheckedItem([]);
      return;
      /* IF not  push in the array*/
    } else {
      setCheckedItem((prevcheckedItems) => {
        const nextcheckedItems = [...prevcheckedItems, value];
        products.forEach((element: any, index: number) => {
          checkRefs.current[index].checked = false;
        });
        return nextcheckedItems;
      });
    }
  };

  const handleAdd = (
    newProducts: { name: string; quantity: string; marked: boolean }[]
  ) => {
    setProducts(newProducts);
    setLength(products.length);
    localStorage.setItem("products", JSON.stringify(products));
  };

  //To cross items out of the list
  const crossItem = (el: any) => {
    // PRIMO TENTATIVO
    /* const index = products.findIndex((product) => product.name === el.name);
    const tempArray = [...products];
    tempArray[index].marked = !tempArray[index].marked;
    setProducts(tempArray); */

    //VERSIONE PIù FIGA
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        return product.name === el.name
          ? { ...product, marked: !product.marked }
          : product;
      });
    });
    /* Non capisco perché dovrei farlo così ma va bene non si aggiorna nemmeno sto maledetto*/
    localStorage.setItem("products", JSON.stringify(products));
  };

  /* do the swap after the state gets updated */
  useEffect(() => {
    const firstIndex = products.findIndex(
      (product: any) => product.name === checkedItems[0]
    );
    const secondIndex = products.findIndex(
      (product: any) => product.name === checkedItems[1]
    );
    if (secondIndex > -1) {
      [products[firstIndex], products[secondIndex]] = [
        products[secondIndex],
        products[firstIndex],
      ];
      setCheckedItem([]);
      localStorage.setItem("products", JSON.stringify(products));
    }
    //
  }, [checkedItems]);

  /* UPDATE COUNTERS */
  useEffect(() => {
    const counter = products.filter((product) => product.marked).length;
    setMarkedProducts(counter);
  }, [products, length]);

  /* Function for backgroundcolor styiling */
  const bgColor = (index: number) => {
    if (index % 2 === 0) return "rgba(255, 228, 196, 0.274)";
    else return "white";
  };

  //Render the products array
  const listItems: JSX.Element[] = products.map((el: any, index: number) => (
    <div
      className="ingredients_row"
      key={index}
      style={{ backgroundColor: bgColor(index) }}
    >
      <div
        className={
          el.marked ? "ingredients_info crossedItem" : "ingredients_info"
        }
        onClick={() => crossItem(el)}
      >
        <div className="ingredients_name">{el.name}</div>
        <div className="ingredients_quantity">{el.quantity}</div>
      </div>
      <SwapCheck
        name={el.name}
        onCheck={handleCheck}
        checkRef={(element: any) => {
          checkRefs.current[index] = element;
        }}
      />
      <DeleteButton id={el.name} products={products} onDelete={handleDelete} />
    </div>
  ));

  return (
    <div className="wrapper">
      <div className="ingredients">
        <div className="ingredients_title">
          <h2>La tua Lista della Spesa</h2>
        </div>
        <div className="ingredients_list">
          <div className="ingredients_row">
            <div className="ingredients_info">
              <div className="ingredients_name bolder">Nome</div>
              <div className="ingredients_quantity">Quantità</div>
            </div>
            <div className="filler"></div>
          </div>
          {listItems}
        </div>

        <AddProductForm products={products} onAdd={handleAdd} />
      </div>
      <ProductInfo marked={markedProducts} products={products} />
    </div>
  );
};
export default IngredientList;
