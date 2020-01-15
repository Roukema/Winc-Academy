import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContainer from "./MainContainer";

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <MainContainer />
        <Footer />
      </main>
    );
  }
}

export default App;
