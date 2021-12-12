import React from "react";

const Item = ({ item }) => {
  return (
    <>
      <h1>{item.id}</h1>
      <h2>{item.title}</h2>
      <p>{item.price}</p>
      <p>{item.pictureUrl}</p>
    </>
  );
};

export default Item;
