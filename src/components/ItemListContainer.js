import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  return (
    <>
      {/* ItemCount component, contador con valores iniciales de 5 y 1 */}
      <ItemCount stock="5" initial="1" />
      <ItemList />

      <h1>Jupi E-commerce</h1>
      <i class="welcome-message">{props.welcome}</i>
    </>
  );
};

export default ItemListContainer;
