import React, { Component } from "react";
import GroceryListItem from "./GroceryListItem";

class GroceryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceryItems: [
        { id: 1, title: "pizza" },
        { id: 2, title: "kaas" },
        { id: 3, title: "klaas" }
      ]
    };
  }

  render() {
    const groceryListItems = this.state.groceryItems.map(item => (
      <GroceryListItem key={item.id} value={item.title} />
    ));
    return <ul>{[groceryListItems]}</ul>;
  }
}

export default GroceryList;
