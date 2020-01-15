import React, { useState } from "react";

const GroceryListItem = item => {
  const title = item.title;

  return <li> {title}</li>;
};

export default GroceryListItem;
