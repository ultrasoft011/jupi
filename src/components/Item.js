import React from "react";

const Item = (props) => {
  return (
    <div className="article-container">
      <h1>{props.id}</h1>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
      <p>{props.pictureURL}</p>
    </div>
  );
};

export default Item;
