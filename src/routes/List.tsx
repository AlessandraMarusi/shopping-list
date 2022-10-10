import { useState } from "react";
import { useEffect } from "react";
import DeleteButton from "../components/DeleteButton";

const Lista = () => {
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
  const [lenght, setLenght] = useState(products.length);

  // Get newProducts from DeleteButton(products array without the deleted element) and update LocalStorage
  const handleDelete = (newProducts: { name: string; quantity: string }[]) => {
    setProducts(newProducts);
    setLenght(
      products.length
    ); /* Creato unicamente per l'update del render senza dover duplicare l'array */
    localStorage.setItem("products", JSON.stringify(products));
  };

  //Render the products array
  const listItems: JSX.Element[] = products.map((el: any) => (
    <tr style={{ width: "100%" }} key={el.name}>
      <td style={nameStyle}>{el.name}</td>
      <td style={quantityStyle}>{el.quantity}</td>
      <DeleteButton id={el.name} products={products} onDelete={handleDelete} />
    </tr>
  ));

  useEffect(() => {
    console.log("EFFECT WOW");
  });

  return (
    <table style={listContainer}>
      <tbody>{listItems}</tbody>
    </table>
  );
};
export default Lista;
