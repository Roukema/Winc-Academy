import React, { Component } from "react";

class GroceryListItem extends Component {
  constructor(props) {
    super(props);
    console.log("hier zijn je props", props);
  }
  render() {
    return (
      <li onClick={this.props.onClick} value={this.props.value}>
        {this.props.value.title}
      </li>
    );
  }
}

export default GroceryListItem;
