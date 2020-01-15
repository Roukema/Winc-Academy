import React, { Component } from "react";
import GroceryList from "./Components/GroceryList";
import ShoppingCart from "./Components/ShoppingCart";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "pizza", onClick: this.handleChange },
        { id: 2, title: "kaas" },
        { id: 3, title: "klaas" }
      ],

      shoppingItems: [
        { id: 4, title: "e" },
        { id: 5, title: "aas" },
        { id: 6, title: "laas" }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event);
  }

  //   const { name, value, type, checked } = event.target;
  //   type === "checkbox"
  //     ? this.setState({ [name]: checked })
  //     : this.setState({ [name]: value });

  render() {
    // const ShoppingCart = this.state.shoppingItems.map(item => (
    //   <GroceryList item={item} key={item.id} value={item.title} />
    // ));
    const sentList = this.state.groceryItems;
    const sentShoppingList = this.state.shoppingItems;
    return (
      <div id="mainContainer">
        <h3>Boodschappen</h3>
        <GroceryList item={sentList} />
        <h3>Winkelwagen</h3>
        <ShoppingCart item={sentShoppingList} />
      </div>
    );
  }
}

export default MainContainer;
