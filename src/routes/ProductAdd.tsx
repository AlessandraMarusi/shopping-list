import React, { Component } from "react";

interface ProductAddSates {
  state: string;
}

const ProductAdd = (props: any, state: string) => {
  const addProduct = (event: any) => {
    event.preventDefault();
    console.log("Submit!");
    console.log(state);
  };
  return (
    <form onSubmit={addProduct}>
      <div className="formContainer">
        <label htmlFor="productName">Product name</label>
        <input
          type="text"
          id="productName"
          aria-describedby="productName"
          name="productName"
          placeholder="Enter name"
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};
export default ProductAdd;
