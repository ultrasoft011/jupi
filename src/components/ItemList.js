import React, { useState } from "react";
import Item from "./Item";

// Promise para resolver en tiempo diferido los datos que se van a renderizar
let myPromise = new Promise(function (Resolve, Reject) {
  // Data: catalogo de los productos
  const data = [
    { id: 1, title: "Jupiter", price: 450, pictureURL: "Imagen_1" },
    { id: 2, title: "Saturn", price: 280, pictureURL: "Imagen_2" },
    { id: 3, title: "Venus", price: 355, pictureURL: "Imagen_3" },
  ];

  // Function setTimeout para simular retraso de red de 2 segundos
  setTimeout(function () {
    Resolve(data);
  }, 5500);
});

// Component ItemList: renderiza por medio de map cada elemento del array ("data")
const ItemList = () => {
  // useState para controlar los productos que se reciben de la promise
  const [product, setProduct] = useState([]);

  // Resolve de la promesa con .then, value: son los datos del catalogo
  myPromise.then(function (value) {
    setProduct(value);
  });

  // Return del container que renderiza cada elemento del array ("data")
  return (
    <>
      <div className="main-container">
        {/* Function map para iterar dentro del array */}
        {product.map((user) => {
          return (
            <div className="second-container">
              {/* Item component: componente encargado de los estilos de cada propiedad que se esta iterando del array */}
              <Item
                id={user.id}
                title={user.title}
                price={`Price: $USD ${user.price}`}
                pictureURL={user.pictureURL}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;