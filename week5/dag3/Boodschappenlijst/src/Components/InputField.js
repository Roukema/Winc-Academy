import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: []
    };
  }
  pushNewItem = event => {
    const value = event.target.value;
    this.setState({
      newItem: value
    });
  };

  render() {
    return (
      <div>
        <input type="text" name="newItem" onChange={this.pushNewItem}></input>
        <button onClick={this.props.onClick.bind(this, this.state.newItem)}>
          {" "}
          toevoegen{" "}
        </button>
      </div>
    );
  }
}

export default InputField;
