import { useState } from "react";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";
import "./index.css";
function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (identfier, newValue) => {
    setInputData((prevValue) => {
      return {
        ...prevValue,
        [identfier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} inputData={inputData} />
      {inputData ? (
        <ResultTable inputData={inputData} />
      ) : (
        <p className="center"> Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
