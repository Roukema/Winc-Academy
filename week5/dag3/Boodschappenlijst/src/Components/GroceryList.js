import React, { Component } from "react";
import GroceryListItem from "./GroceryListItem";

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const groceryItemsArray = this.state.item;
    const groceryListItems = groceryItemsArray.map(item => (
      <GroceryListItem item={item} key={item.id} onClick={this.state.onClick} />
    ));
    return <ul>{groceryListItems}</ul>;
  }
}

export default GroceryList;
