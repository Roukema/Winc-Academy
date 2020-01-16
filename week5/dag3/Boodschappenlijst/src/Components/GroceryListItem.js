import React, { Component } from "react";

class GroceryListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li
        className="listItems"
        onClick={this.props.onClick}
        id={this.props.value.id}
      >
        {this.props.value.title}
      </li>
    );
  }
}

export default GroceryListItem;
