import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import NewFactButton from "../components/NewFactButton";

const CatFacts = () => {
  const [fact, setFact] = useState("");

  useEffect(() => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      const newFact = res.data.fact;
      setFact(newFact);
    });
  }, []);

  const handleClick = (newFact: string) => {
    setFact(newFact);
  };
  console.log(fact);

  return (
    <div>
      {fact}
      <NewFactButton onClick={handleClick} />
    </div>
  );
};

export default CatFacts;
