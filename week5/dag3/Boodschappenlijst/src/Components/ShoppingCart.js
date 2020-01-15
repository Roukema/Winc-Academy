import React, { Component } from "react";
import GroceryList from "./GroceryList";

class ShoppingCart extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <GroceryList />
      </div>
    );
  }
}
