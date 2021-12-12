import React from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import catalog from "./Catalog";

const ItemListContainer = (props) => {
  return (
    <>
      {/* ItemCount component, contador con valores iniciales de 5 y 1 */}
      <ItemCount stock="5" initial="1" />

      {/* Item component */}
      <Item item={catalog}/>
      <h1>Jupi E-commerce</h1>
      <i class="welcome-message">{props.welcome}</i>
    </>
  );
};

export default ItemListContainer;
