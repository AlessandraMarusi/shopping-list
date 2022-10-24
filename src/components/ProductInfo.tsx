import React, { useState } from "react";

interface IProductInfo {
  marked: number;
  toBuy: number;
}

const ProductInfo = (props: IProductInfo) => {
  const [extraProducts, setExtraProducts] = useState(0);

  const changeExtraProducts = (value: number) => {
    setExtraProducts((oldExtraProduct) => oldExtraProduct + value);
  };

  return (
    <div className="productsInfo">
      <span>Da comprare: {props.toBuy}</span>

      <span>Già presi: {props.marked}</span>
      <div>
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
