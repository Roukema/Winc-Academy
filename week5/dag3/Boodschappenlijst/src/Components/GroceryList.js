import React, { Component } from "react";
import GroceryListItem from "./GroceryListItem";

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = props.item;
  }

  render() {
    const groceryItemsArray = this.state;

    const groceryListItems = groceryItemsArray.map(item => (
      <GroceryListItem item={item} key={item.id} onClick={item.onClick} />
    ));
    return <ul>{groceryListItems}</ul>;
  }
}

export default GroceryList;
