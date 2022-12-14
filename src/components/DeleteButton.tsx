import React from "react";

interface ListaProps {
  id: string;
  products: any;
  onDelete: (
    newProducts: { name: string; quantity: string; marked: boolean }[]
  ) => void;
}
//Component only modify the array, any change to localstorage happens in List
const DeleteButton = (props: ListaProps) => {
  const { products, id } = props;

  const deleteItem = () => {
    const index = products.findIndex((e: any) => e.name === id);

    if (index > -1) {
      products.splice(index, 1);
      props.onDelete(products);
    }
  };

  const deleteStyle = {
    width: "25px",
    height: "25px",
    border: "none",
    backgroundColor: "#E07973",
    cursor: "pointer",
  };

  return (
    <button className="ingredients_button" onClick={deleteItem}>
      X
    </button>
  );
};
export default DeleteButton;
