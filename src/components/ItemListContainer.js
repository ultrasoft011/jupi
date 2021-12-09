import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <>
      <ItemCount stock="5" initial="1" />
      <h1>Jupi E-commerce</h1>
      <i class="welcome-message">{props.welcome}</i>
    </>
  );
};

export default ItemListContainer;
