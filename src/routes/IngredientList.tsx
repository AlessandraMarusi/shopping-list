import { useState, useRef, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import SwapCheck from "../components/SwapCheck";
import AddProductForm from "../components/AddProductForm";

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
    /* IF already in the array */
    if (checkedItems.some((el) => el === value)) {
      setCheckedItem([]);
      console.log("AHAH GIà PRESENTE BISH");
      return;
      /* IF not */
    } else {
      setCheckedItem((prevcheckedItems) => {
        const nextcheckedItems = [...prevcheckedItems, value];
        products.forEach((element: any, index: number) => {
          checkRefs.current[index].checked = false;
        });

        // checkRef.current.checked = false;
        return nextcheckedItems;
      });

      console.log(checkedItems[0]);
      console.log(checkedItems[1]);
    }
  };

  const handleAdd = (newProducts: { name: string; quantity: string }[]) => {
    setProducts(newProducts);
    setLength(
      products.length
    ); /* Creato unicamente per l'update del render senza dover duplicare l'array */
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

  /* #region STYLE  */
  const listContainer = {
    width: "80%",
    margin: "0 auto",
  };
  const nameStyle = {
    width: "80%",
  };
  const quantityStyle = {
    width: "20%",
  };
  const row = {
    display: "flex",
    padding: "10px 0",
  };
  /* #endregion */

  //Render the products array
  const listItems: JSX.Element[] = products.map((el: any, index: number) => (
    <div style={row} key={el.name}>
      <div style={nameStyle}>{el.name}</div>
      <div style={quantityStyle}>{el.quantity}</div>

      <SwapCheck
        name={el.name}
        checkNumber={checkedItems.length}
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
    <div style={listContainer}>
      {listItems}

      <AddProductForm products={products} onAdd={handleAdd} />
    </div>
  );
};
export default IngredientList;
