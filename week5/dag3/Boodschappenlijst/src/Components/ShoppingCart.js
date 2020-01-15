import React, { Component } from "react";
import GroceryListItem from "./GroceryListItem";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const shoppingItemsArray = this.props.item;
    const groceryListItems = shoppingItemsArray.map(item => (
      <GroceryListItem value={item} key={item.id} onClick={this.handleChange} />
    ));
    return <ul>{groceryListItems}</ul>;
  }
}
export default ShoppingCart;
