import React from "react";
import DeleteButton from "../components/DeleteButton";

const Lista = () => {
  /* #region   */
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
  const products = JSON.parse(localStorage.getItem("products") || "[]");

  const listItems: JSX.Element[] = products.map((el: any) => (
    <tr style={{ width: "100%" }} key={el.name}>
      <td style={nameStyle}>{el.name}</td>
      <td style={quantityStyle}>{el.quantity}</td>
      <td>
        <DeleteButton id={el.name} />
      </td>
    </tr>
  ));

  /* const listItems2: JSX.Element[] = products.map((el: any) => (
    <ListItem item={el} />
  )); */

  return <div style={listContainer}>{listItems}</div>;
};
export default Lista;

/* const ListItem = (props: { item: any }) => (
  <tr key={props.item.name}>
    <td>{props.item.name}</td>
    <td>{props.item.quantity}</td>
  </tr>
);
 */
