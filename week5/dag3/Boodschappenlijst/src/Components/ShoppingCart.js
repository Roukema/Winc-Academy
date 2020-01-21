import React, { Component } from "react";
import GroceryListItem from "./GroceryListItem";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    console.log("propies", props);
  }

  render() {
    const shoppingItemsArray = this.props.item;
    const groceryListItems = shoppingItemsArray.map(item => (
      <GroceryListItem value={item} key={item.id} onClick={this.handleChange} />
    ));
    return (
      <div className="shoppingCart">
        <h3>Winkelwagen</h3>
        <ul>{groceryListItems}</ul>
      </div>
    );
  }
}
export default ShoppingCart;
