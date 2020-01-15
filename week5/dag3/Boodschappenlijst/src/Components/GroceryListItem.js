import React, { Component } from "react";

class GroceryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return <li onClick={this.state.onClick}>{this.state.item.title}</li>;
  }
}

export default GroceryListItem;
