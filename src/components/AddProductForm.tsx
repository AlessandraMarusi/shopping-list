interface ListaProps {
  products: any;
  onAdd: (newProducts: { name: string; quantity: string }[]) => void;
}

const AddProductForm = (props: ListaProps) => {
  const addProduct = (e: any) => {
    e.preventDefault();
    const newProduct = {
      name: e.target[0].value,
      quantity: e.target[1].value,
    };
    props.products.push(newProduct);
    props.onAdd(props.products);
    e.target[0].value = "";
    e.target[1].value = "";
  };
  /* #region STYLE  */
  const nameStyle = {
    width: "80%",
    border: "none",
    fontSize: "1.2rem",
  };
  const quantityStyle = {
    width: "20%",
    border: "none",
    fontSize: "1.2rem",
  };
  const row = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid black",
    borderTop: "1px solid black",
    padding: "5px 0",
  };
  const addButtonStyle = {
    border: "none",
    backgroundColor: "#A2FAA7",
    fontSize: "1.2rem",
    borderRadius: "10px",
    padding: "5px 10px",
    cursor: "pointer",
  };
  const btnContainer = {
    width: "125px",
    textAlign: "left",
  };
  /* #endregion */
  return (
    <form onSubmit={addProduct} autoComplete="off">
      <div style={row} className="formContainer">
        <input
          style={nameStyle}
          type="text"
          aria-describedby="productName"
          name="productName"
          placeholder="New Product"
        />
        <input
          style={quantityStyle}
          type="text"
          aria-describedby="productQnt"
          name="productQnt"
          placeholder="Quantity"
        />
        <div style={btnContainer}>
          <button style={addButtonStyle} type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddProductForm;
