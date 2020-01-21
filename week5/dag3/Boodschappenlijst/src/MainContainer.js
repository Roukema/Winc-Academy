import React, { Component } from "react";
import GroceryList from "./Components/GroceryList";
import ShoppingCart from "./Components/ShoppingCart";
import InputField from "./Components/InputField";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "pizza", ammount: 0 },
        { id: 2, title: "kaas", ammount: 0 },
        { id: 3, title: "klaas", ammount: 0 }
      ],

      shoppingItems: [{ id: 4, title: "aas", ammount: 2 }]
    };
    this.handleChange = this.handleChange.bind(this);
    this.AddItemShoppingCart = this.AddItemShoppingCart.bind(this);
    this.AddItemGroceryList = this.AddItemGroceryList.bind(this);
    this.inputItem = this.inputItem.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const currentShoppingList = this.state.shoppingItems;
    const product = this.state.groceryItems.find(item =>
      item.id == target.id ? item.title : null
    );
    const shoppingListItem = currentShoppingList.filter(
      item => item.id == product.id
    );
    console.log("shoppinglistitem", shoppingListItem);
    shoppingListItem.lengt === 0
      ? this.AddItemShoppingCart(product)
      : this.addAmount(product);

    // this.removeItem(target);
  }
  AddItemShoppingCart = item => {
    this.setState({
      shoppingItems: this.state.shoppingItems.concat(item)
    });
  };

  addAmount = product => {
    const shoppingList = this.state.shoppingItems.concat(product);
    const { newList } = shoppingList.map(item => {
      if (item.id === product.id) {
        item.ammount++;
      }
      return item, console.log("dit is je item na map", item);
    });

    console.log(
      "newlist",
      newList,
      "product",
      product,
      "shoppinglist",
      shoppingList
    );
    this.setState({ shoppingItems: { newList } });
  };

  // removeItem uitgecommend, anders niet makkelijk meerdere keren item toe te voegen.

  // removeItem = target => {
  //   this.setState(state => {
  //     let groceryItems = state.groceryItems.filter(
  //       item => item.id != target.id
  //     );
  //     return { groceryItems };
  //   });
  // };
  emptyCart = () => {
    this.setState({ shoppingItems: [] });
  };
  inputItem = arg => {
    console.log("input item ontvangt:", arg);
    let newid = this.state.groceryItems.length + 1;
    let item = { id: newid, title: [arg] };
    this.AddItemGroceryList(item);
  };
  AddItemGroceryList = item => {
    this.setState({
      groceryItems: [...this.state.groceryItems, item]
    });
  };

  render() {
    const sentList = this.state.groceryItems;
    console.log("shoppingitems", this.state.shoppingItems);
    const sentShoppingList = this.state.shoppingItems;
    return (
      <div className="mainContainer">
        <InputField onClick={this.inputItem} />
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
