interface ListaProps {
  products: { name: string; quantity: string; marked: boolean }[];
  onAdd: (
    newProducts: { name: string; quantity: string; marked: boolean }[]
  ) => void;
}

const AddProductForm = (props: ListaProps) => {
  const addProduct = (e: any) => {
    e.preventDefault();
    const newProduct = {
      name: e.target[0].value,
      quantity: e.target[1].value,
      marked: false,
    };
    props.products.push(newProduct);
    props.onAdd(props.products);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <form onSubmit={addProduct} autoComplete="off">
      <div className="form_row">
        <input
          className="form_name"
          type="text"
          aria-describedby="productName"
          name="productName"
          placeholder="New Product"
        />
        <input
          className="form_quantity"
          type="text"
          aria-describedby="productQnt"
          name="productQnt"
          placeholder="Quantity"
        />
        <div className="form_btnContainer">
          <button className="form_button" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddProductForm;
