import React, { Component } from "react";
import GroceryListItem from "./GroceryListItem";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = props.item;
  }

  render() {
    const shoppingItemsArray = this.state;
    const groceryListItems = shoppingItemsArray.map(item => (
      <GroceryListItem item={item} key={item.id} onClick={this.handleChange} />
    ));
    return <ul>{groceryListItems}</ul>;
  }
}
export default ShoppingCart;
