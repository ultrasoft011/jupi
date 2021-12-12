import React from "react";
import Item from "./Item";

const ItemList = () => {
  const data = [
    { title: "John Doe" },
    { title: "Victor Wayne" },
    { title: "Jane Doe" },
  ];

  return (
    <div>
      {data.map((user) => {
        return <Item title={user.title} />;
      })}
    </div>
  );
};

export default ItemList;
