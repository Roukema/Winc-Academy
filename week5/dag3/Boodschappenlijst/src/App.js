import React, { Component } from "react";
import GroceryList from "./Components/GroceryList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <GroceryList />
        <Footer />
      </main>
    );
  }
}

export default App;
