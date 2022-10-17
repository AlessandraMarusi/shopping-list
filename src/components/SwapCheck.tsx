interface IngredientListProps {
  name: string;
  // checkNumber: number;
  checkRef: any;
  onCheck: (value: string) => void;
}

const SwapCheck = (props: IngredientListProps) => {
  const { name, checkRef } = props;

  const handleChange = (e: any) => {
    const { value } = e.target;
    props.onCheck(value);
  };

  return (
    <div className="ingredients_check">
      <input
        type="checkbox"
        name={name}
        value={name}
        onChange={handleChange}
        ref={checkRef}
      ></input>
      <label htmlFor={name}> Swap</label>
    </div>
  );
};

export default SwapCheck;
