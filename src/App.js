import React from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Hello Simona",
    };
  }
  change = () => {};

  render() {
    return (
      <div className="App">
        <h1>{this.state.string}</h1>
        <button onClick={() => this.setState({ string: "How u doing?" })}>
          Change Text
        </button>
      </div>
    );
  }
}
export default App;
