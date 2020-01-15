import React, { Component } from "react";

class GroceryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = props.item;
  }
  render() {
    return <li>{this.state.title}</li>;
  }
}

export default GroceryListItem;
