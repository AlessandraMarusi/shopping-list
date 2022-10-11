import axios from "axios";

interface NewFactButtonProps {
  onClick: (newFact: string) => void;
}

const NewFactButton = (props: NewFactButtonProps) => {
  var newFact: string = "";
  const GetNewFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      const newFact = res.data.fact;
      props.onClick(newFact);
    });
  };
  return <button onClick={GetNewFact}>New Fact!</button>;
};

export default NewFactButton;
