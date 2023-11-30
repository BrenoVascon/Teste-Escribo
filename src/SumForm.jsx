import React, {useState} from "react";
import "./App.css"

const SumForm = ({onSum}) => {
  const [numero, setNumero] = useState ('');

  const handleInputChange = (e) => { 
    setNumero(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSum(Number(numero))
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Número:
        <input type="number" value={numero} onChange={handleInputChange} />
      </label>
      <button type="submit">Calcular Somatório</button>
    </form>
  );
};

export default SumForm;