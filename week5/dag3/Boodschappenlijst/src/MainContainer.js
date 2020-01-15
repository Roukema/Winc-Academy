import React, { Component } from "react";
import GroceryList from "./Components/GroceryList";
import ShoppingCart from "./Components/ShoppingCart";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "pizza" },
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
    console.log("shopping items", this.state);
    this.AddItem = this.AddItem.bind(this);
  }
  handleChange(event) {
    let target = event.target.getAtribute("value");
    console.log(target);
    this.AddItem(target);
  }
  AddItem = target => {
    this.setState({
      shoppingItems: [...this.state.shoppingItems, { target }]
    });
    console.log(this.state);
  };
  //
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
        <GroceryList item={sentList} onClick={this.handleChange} />
        <h3>Winkelwagen</h3>
        <ShoppingCart item={sentShoppingList} />
      </div>
    );
  }
}

export default MainContainer;
