import React, { Component } from "react";
import GroceryListItem from "./GroceryListItem";

class GroceryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const groceryItemsArray = this.props.item;
    const groceryListItems = groceryItemsArray.map(item => (
      <GroceryListItem
        value={item}
        key={item.id}
        onClick={this.props.onClick}
      />
    ));
    return <ul>{groceryListItems}</ul>;
  }
}

export default GroceryList;
