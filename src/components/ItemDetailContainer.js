import React, { useState } from "react";
import ItemDetail from "./ItemDetail";

let secondPromise = new Promise(function (Resolve, Reject) {
  // Function setTimeout para simular retraso de red de 2 segundos
  setTimeout(function () {
    return Resolve();
  }, 2000);
});

const getItem = () => {
  return secondPromise;
};

function ItemDetailContainer() {
  getItem();
  // useState para el manejo del boton
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };
  // useState para controlar los productos que se reciben de la promise
  const [mock, setMock] = useState([]);

  // Resolve de la promesa con .then, value: son los datos del catalogo
  secondPromise.then(function (value) {
    setMock(value);
  });

  // Return del container que renderiza cada elemento del array ("data")
  return (
    <>
    <div className="button-container">
      <button className="button-show" onClick={() => handleButtonClick()}>
        Ver detalles
      </button>
    </div>
      {buttonClicked ? <ItemDetail /> : null}
      {/* ItemList component, para renderizar cada producto del catalogo*/}
      {console.log(mock)}
    </>
  );
}

export default ItemDetailContainer;