import React, { useState } from "react";

interface IProductInfo {
  marked: number;
  products: { name: string; quantity: string; marked: boolean }[];
  //   toBuy: number;
}

const ProductInfo = (props: IProductInfo) => {
  const [extraProducts, setExtraProducts] = useState<number>(
    parseInt(localStorage.getItem("extraCounter") || "0")
  );

  const changeExtraProducts = (value: number) => {
    var newCount = extraProducts + value;
    setExtraProducts((oldExtraProduct) => oldExtraProduct + value);
    localStorage.setItem("extraCounter", newCount.toString());
  };

  return (
    <div className="productsInfo">
      <span>Da comprare: {props.products.length - props.marked}</span>

      <span>Già presi: {props.marked}</span>
      <div className="infoExtra">
        <span>Extra: {extraProducts}</span>
        <button onClick={() => changeExtraProducts(1)}>&#x2b;</button>
        <button value="-1" onClick={() => changeExtraProducts(-1)}>
          &minus;
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
