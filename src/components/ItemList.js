import React from "react";
import Item from "./Item";

const ItemList = () => {
  const data = [
    { id: 1, title: "Jupiter", price: 450, pictureURL: "www.1.com" },
    { id: 2, title: "Saturn", price: 280, pictureURL: "www.2.cjc" },
    { id: 3, title: "Venus", price: 355, pictureURL: "222.hola.com" },
  ];

  return (
    <div>
      {data.map((user) => {
        return (
          <Item
            id={user.id}
            title={user.title}
            price={`Price: $USD ${user.price}`}
            pictureURL={user.pictureURL}
          />
        );
      })}
    </div>
  );
};

export default ItemList;