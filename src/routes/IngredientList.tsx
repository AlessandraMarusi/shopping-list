import { useState, useRef, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import SwapCheck from "../components/SwapCheck";
import AddProductForm from "../components/AddProductForm";
import React from "react";
import "../styles/ingredientListStyle.scss";

const ThemeContext = React.createContext("light");

const IngredientList = () => {
  // Set products to the current data saved in LocalLtorage
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );
  //Used for re-rendering page on products change
  const [length, setLength] = useState(products.length);

  const [checkedItems, setCheckedItem] = useState<string[]>([]);

  const checkRefs: any = useRef([]);

  // Get newProducts from DeleteButton(products array without the deleted element) and update LocalStorage
  const handleDelete = (newProducts: { name: string; quantity: string }[]) => {
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

  const handleAdd = (newProducts: { name: string; quantity: string }[]) => {
    setProducts(newProducts);
    setLength(
      products.length
    ); /* Creato unicamente per l'update del render senza dover duplicare l'array */
    localStorage.setItem("products", JSON.stringify(products));
  };

  //Toggle the class crossItem to crossed items on click
  const crossItem = (event: React.MouseEvent) => {
    var classes = event.currentTarget.className;
    if (classes == "ingredients_row")
      event.currentTarget.classList.add("crossedItem");
    else event.currentTarget.classList.remove("crossedItem");
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
  //Render the products array
  const listItems: JSX.Element[] = products.map((el: any, index: number) => (
    <div className="ingredients_row" key={el.name} onClick={crossItem}>
      <div className="ingredients_name">{el.name}</div>
      <div className="ingredients_quantity">{el.quantity}</div>

      <SwapCheck
        name={el.name}
        /* checkNumber={checkedItems.length} */
        onCheck={handleCheck}
        checkRef={(element: any) => {
          checkRefs.current[index] = element;
        }}
      />
      <DeleteButton id={el.name} products={products} onDelete={handleDelete} />
      {/* <button onClick={checkConsole}>check</button> */}
    </div>
  ));

  return (
    <div className="ingredients">
      {listItems}

      <AddProductForm products={products} onAdd={handleAdd} />
    </div>
  );
};
export default IngredientList;
