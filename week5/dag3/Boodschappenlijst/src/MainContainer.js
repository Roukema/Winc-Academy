import React, { Component } from "react";
import GroceryList from "./Components/GroceryList";
import ShoppingCart from "./Components/ShoppingCart";
import InputField from "./Components/InputField";
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
    this.AddItem = this.AddItem.bind(this);
  }
  handleChange(event) {
    let target = event.target;
    let item = this.state.groceryItems.find(item =>
      item.id == target.id ? item.title : null
    );

    this.AddItem(item);
    this.removeItem(target);
  }
  AddItem = item => {
    this.setState({
      shoppingItems: [...this.state.shoppingItems, item]
    });
  };
  removeItem = target => {
    this.setState(state => {
      let groceryItems = state.groceryItems.filter(
        item => item.id != target.id
      );
      return { groceryItems };
    });
  };
  emptyCart = () => {
    this.setState({ shoppingItems: [] });
  };

  render() {
    const sentList = this.state.groceryItems;
    const sentShoppingList = this.state.shoppingItems;
    return (
      <div className="mainContainer">
        <InputField />
        <GroceryList item={sentList} onClick={this.handleChange} />

        <ShoppingCart item={sentShoppingList} />
        <button id="resetShoppingCart" onClick={this.emptyCart}>
          Leeg Winkelwagen
        </button>
      </div>
    );
  }
}

export default MainContainer;
