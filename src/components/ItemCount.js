import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  stock = Number(stock);
  initial = Number(initial);
  // Declaración de useState
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

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
      <div>
        <h2>Producto Jupi</h2>
        <p>
          <button onClick={zeroLimit}>-</button>
          {count}
          <button onClick={onAdd}>+</button>
        </p>
      </div>
    </>
  );
};

export default ItemCount;
