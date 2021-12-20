import React from "react";
import logo from "../images/el-universo.jpg";

function ItemDetail() {
  return (
    // Desarrolla la vista de detalle expandida del producto con su imagen
    // título, descripción y precio
    <>
      <div className="item-detail">
        <h1>Titulo: El universo</h1>
        <img src={logo} width="250px" alt="" />
        <p>Descripción: ¡Deja que Lonely Planet te lleve más lejos que nunca! Aterriza en los planetas de nuestro sistema solar, antes de continuar tu viaje a los confines del universo conocido a través de exoplanetas, estrellas recién nacidas, restos de supernovas o supercúmulos de galaxias, a medida que descubres las vistas más asombrosas del espacio.</p>
        <h3>Precio: USD 99</h3>
      </div>
      {/* <h1>Titulo: Limites de la Galaxia</h1>
      <h2>Imagen</h2>
      
      <h4>Precio</h4> */}
    </>
  );
}

export default ItemDetail;
