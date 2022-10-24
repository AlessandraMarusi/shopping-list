const ProductAdd = (props: any, state: string) => {
  const addProduct = (e: any) => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    e.preventDefault();
    const newProduct = {
      name: e.target[0].value,
      quantity: e.target[1].value,
      marked: false,
    };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
  };

  return (
    <form onSubmit={addProduct}>
      <div className="formContainer">
        <label htmlFor="productName">Product name</label>
        <input
          type="text"
          aria-describedby="productName"
          name="productName"
          placeholder="Enter name"
        />
        <label htmlFor="productQnt">Product quantity</label>
        <input
          type="text"
          aria-describedby="productQnt"
          name="productQnt"
          placeholder="Enter quantity"
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};
export default ProductAdd;
