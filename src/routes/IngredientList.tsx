import { useState, useRef, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import SwapCheck from "../components/SwapCheck";

const IngredientList = () => {
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
  /* #endregion */

  // Set products to the current data saved in LocalLtorage
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );
  //Used for re-rendering page on products change
  const [lenght, setLenght] = useState(products.length);

  const [checkedItems, setCheckedItem] = useState<string[]>([]);

  const checkRefs: any = useRef([]);

  // Get newProducts from DeleteButton(products array without the deleted element) and update LocalStorage
  const handleDelete = (newProducts: { name: string; quantity: string }[]) => {
    setProducts(newProducts);
    setLenght(
      products.length
    ); /* Creato unicamente per l'update del render senza dover duplicare l'array */
    localStorage.setItem("products", JSON.stringify(products));
  };

  const handleCheck = (value: string) => {
    if (checkedItems.length == 0) {
      setCheckedItem((prevcheckedItems) => {
        const nextcheckedItems = [...prevcheckedItems, value];
        return nextcheckedItems;
      });
      return;
    }

    if (checkedItems.some((el) => el === value)) {
      setCheckedItem([]);
      console.log("AHAH GIà PRESENTE BISH");
      return;
    } else {
      /* ELEMENTO NON PRESENTE */
      setCheckedItem((prevcheckedItems) => {
        const nextcheckedItems = [...prevcheckedItems, value];
        // @ts-ignore: Non so come dirgli di non rompere
        products.forEach((element, index) => {
          checkRefs.current[index].checked = false;
        });

        // checkRef.current.checked = false;
        return nextcheckedItems;
      });

      console.log(checkedItems[0]);
      console.log(checkedItems[1]);
    }
  };

  useEffect(() => {
    console.log(checkedItems[0]);
    console.log(checkedItems[1]);
    const firstIndex = products.findIndex(
      (product: any) => product.name === checkedItems[0]
    );
    const secondIndex = products.findIndex(
      (product: any) => product.name === checkedItems[1]
    );
    console.log(firstIndex);
    console.log(secondIndex);
    if (secondIndex > -1) {
      [products[firstIndex], products[secondIndex]] = [
        products[secondIndex],
        products[firstIndex],
      ];
      setCheckedItem([]);
    }
    //
  }, [checkedItems]);

  const checkConsole = () => {
    console.log(checkedItems);
  };

  //Render the products array
  const listItems: JSX.Element[] = products.map((el: any, index: number) => (
    <tr style={{ width: "100%" }} key={el.name}>
      <td style={nameStyle}>{el.name}</td>
      <td style={quantityStyle}>{el.quantity}</td>

      <SwapCheck
        name={el.name}
        checkNumber={checkedItems.length}
        onCheck={handleCheck}
        checkRef={(element: any) => {
          checkRefs.current[index] = element;
        }}
      />

      <DeleteButton id={el.name} products={products} onDelete={handleDelete} />
      <button onClick={checkConsole}>check</button>
    </tr>
  ));

  return (
    <table style={listContainer}>
      <tbody>{listItems}</tbody>
    </table>
  );
};
export default IngredientList;
