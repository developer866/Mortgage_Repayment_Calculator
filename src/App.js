import "./App.css";
import Result from "./components/Result";
import Form from "./components/Form";
import { useState } from "react";
function App() {
  const [inputs, setInputs] = useState({
    amount: "",
    term: "",
    interestRate: "",
    type: "Repayement",
  });
  const [result, setResult] = useState({
    monthlyRepayment: 0,
    totalRepayment: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, term, interestRate, type } = inputs;
    const p = parseFloat(amount);
    const r = parseFloat(interestRate);
    const n = parseInt(term) * 12;

    let monthlyRepayment = 0;

    if (type === "Repayement") {
      monthlyRepayment =
        (p * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    } else if (type === "interestOnly") {
      monthlyRepayment = p * r;
    }
    const totalRepayment =
      type === "Repayment" ? monthlyRepayment * n : "N/A Interest Only";
    setResult({
      monthlyRepayment: monthlyRepayment.toFixed(2),
      totalRepayment: totalRepayment,
    });
  };
  return (
    <div className="App">
      <Form handleChange = {handleChange} handleSubmit ={handleSubmit} inputs = {inputs}/>
      <Result result = {result}/>
    </div>
  );
}

export default App;
