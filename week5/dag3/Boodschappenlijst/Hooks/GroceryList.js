import React, { useState } from "react";
import GroceryListItem from "./GroceryListItem";

const GroceryList = () => {
  let groceryItems = [
    { id: 1, title: "pizza" },
    { id: 2, title: "kaas" }
  ];
  const [listState] = useState(groceryItems);
  listState.map(GroceryListItem());
  return (
    <ul>
      <GroceryListItem />
    </ul>
  );
};

export default GroceryList;
