import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",

      lactose: false,
      vega: false,
      vlees: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          <input
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />

          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
          />
          <label>Female</label>
          <br />
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="paris">paris</option>
            <option value="rome">rome</option>
            <option value="amsterdam">amsterdam</option>
            <option value="london">london</option>
          </select>
          {/* Create select box for location here */}
          <br />
          <label>
            <input
              type="checkbox"
              checked={this.state.lactose}
              name="lactose"
              onChange={this.handleChange}
            />
            lactose
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.state.vega}
              name="vega"
              onChange={this.handleChange}
            />
            vega
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.state.vlees}
              name="vlees"
              onChange={this.handleChange}
            />
            vlees
          </label>
          {/* Create check boxes for dietary restrictions here */}
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>
          Your gender: {this.state.gender}
          {/* {this.state.gender === "male" ? "male" : null}
          {this.state.gender === "female" ? "female" : null} */}
        </p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions: {this.state.lactose ? "lactose " : null}
          {this.state.vega ? "vega " : null}
          {this.state.vlees ? "vlees" : null}
        </p>
      </main>
    );
  }
}

export default App;
