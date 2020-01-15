import React, { Component } from "react";

class GroceryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = props.value;
  }
  render() {
    return <li>{this.state}</li>;
  }
}

export default GroceryListItem;
