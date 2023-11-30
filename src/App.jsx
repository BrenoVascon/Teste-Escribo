import React, { useState } from 'react';
import SumForm from './SumForm';
import "./App.css"



const App = () => {
  const [resultado, setResultado] = useState(0);
  const [valoresSomados, setValoresSomados] = useState([]);

  const calcularSomatorio = (numero) => {
    let somatorio = 0;
    let valores = [];

    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
        valores.push(i);
      }
    }

    setResultado(somatorio);
    setValoresSomados(valores);
  };

  return (
    <div className='Container'> 
    <div className='Forms'>
      <h1 className='title'>Somatório React App</h1>
      <SumForm onSum={calcularSomatorio} />
      {resultado !== 0 && (
        <div className='ContainerResult'>
          <p>Resultado do Somatório: {resultado}</p>
          <p>Valores Somados: {valoresSomados.join(', ')}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default App;
