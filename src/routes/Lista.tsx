import React from "react";

const Lista = () => {
  const product = { name: "patate", quantity: "10", price: "1" };
  const products = { product };
  console.log(products);
  return <div>{product.name}</div>;
};
export default Lista;
