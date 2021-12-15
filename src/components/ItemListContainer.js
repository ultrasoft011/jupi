import React, { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const ItemListContainer = (props) => {
  // useState para mostrar mensaje de loading del catalogo
  const [load, setLoad] = useState("Loading, please wait...");
  const [messageLoad, setMessage] = useState("");
  // useState para el manejo del boton
  const [buttonClicked, setButtonClicked] = useState(false);

  // Function loading: para mostrar un texto mientras carga un catalogo
  const loadingCatalog = () => {
    setTimeout(function () {
      setLoad("");
    }, 2000);
  };

  const messageCatalog = () => {
    setTimeout(function () {
      setMessage("Jupi Catalog");
      document.querySelector(".button-show").style.display = "initial";
    }, 3500);
  };

  // Function handleButtonClick para la logica del boton
  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  // const loadButton = () => {
  //   setTimeout(function () {

  //   )
  //   }
  // }

  return (
    <>
      <p className="loading">
        {load} {messageLoad}
        {loadingCatalog()} {messageCatalog()}
      </p>
      <button className="button-show" onClick={() => handleButtonClick()}>
        Ver detalles
      </button>
      {buttonClicked ? <ItemDetail /> : null}
      {/* ItemList component, para renderizar cada producto del catalogo*/}
      <ItemList />

      {/* ItemCount component, contador con valores iniciales de 5 y 1 */}
      <ItemCount stock="5" initial="1" />

      <h1>Jupi E-commerce</h1>
      <i className="welcome-message">{props.welcome}</i>
    </>
  );
};

export default ItemListContainer;
