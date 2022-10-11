interface IngredientListProps {
  name: string;
  checkNumber: number;
  checkRef: any;
  onCheck: (value: string) => void;
}

const SwapCheck = (props: IngredientListProps) => {
  const { name, checkRef } = props;

  const handleChange = (e: any) => {
    const { value } = e.target;
    props.onCheck(value);
  };

  const checkContainerStyle = {
    width: "100px",
  };
  const checkStyle = {
    cursor: "pointer",
  };

  return (
    <div style={checkContainerStyle}>
      <input
        type="checkbox"
        name={name}
        value={name}
        onChange={handleChange}
        ref={checkRef}
        style={checkStyle}
      ></input>
      <label htmlFor={name}> Swap</label>
    </div>
  );
};

export default SwapCheck;
