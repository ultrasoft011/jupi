import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  // Convertir variables de entrada con formato en numeros
  stock = Number(stock);
  initial = Number(initial);

  // Declaración de useState
  const [count, setCount] = useState(initial);

  // Logica para añadir sumar uno cuando el usuario presiona "+"
  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  // Logica para restar uno cuando el usuario presiona "-" y limite de 0 para que no hayan numeros negativos
  const zeroLimit = () => {
    if (count <= stock) {
      setCount(count - 1);
      if (count <= 0) {
        setCount(0);
      }
    }
  };

  return (
    <>
      <div className="producto-jupi">
        <h2>Producto Jupi</h2>
        <div className="counter-container">
          <div className="btn-fix-right">
            <button className="btn btn-danger" onClick={zeroLimit}>
              -
            </button>
          </div>
          <p className="counter">{count}</p>
          <div className="btn-fix-left">
            <button className="btn btn-success" onClick={onAdd}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
