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
      <div class="producto-jupi">
        <h2>Producto Jupi</h2>
        <div class="counter-container">
          <div class="btn-fix-right">
            <button class="btn btn-danger" onClick={zeroLimit}>
              -
            </button>
          </div>
          <p class="counter">{count}</p>
          <div class="btn-fix-left">
            <button class="btn btn-success" onClick={onAdd}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
