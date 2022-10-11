import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import { Value } from "sass";

interface IngredientListProps {
  name: string;
  checkNumber: number;
  checkRef: any;
  onCheck: (value: string) => void;
}

const SwapCheck = (props: IngredientListProps) => {
  const { name, checkNumber, checkRef } = props;

  const handleChange = (e: any) => {
    const { value, checked } = e.target;
    props.onCheck(value);
  };

  return (
    <td>
      <input
        type="checkbox"
        name={name}
        value={name}
        onChange={handleChange}
        ref={checkRef}
      ></input>
      <label htmlFor={name}> Swap</label>
    </td>
  );
};

export default SwapCheck;
