import React, { useState } from "react";

let secondPromise = new Promise(function (Resolve, Reject) {
  // Function setTimeout para simular retraso de red de 2 segundos
  setTimeout(function () {
    return Resolve("Solved");
  }, 2000);
});

const getItem = () => {
  return secondPromise;
};

function ItemDetailContainer() {
  getItem();
  // useState para controlar los productos que se reciben de la promise
  const [mock, setMock] = useState([]);

  // Resolve de la promesa con .then, value: son los datos del catalogo
  secondPromise.then(function (value) {
    setMock(value);
  });

  // Return del container que renderiza cada elemento del array ("data")
  return (
    <>
      <h1>Test</h1>
      {console.log(mock)}
    </>
  );
}

export default ItemDetailContainer;
