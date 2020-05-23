import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      string: "Bido",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello {this.state.string}</h1>
          <button
            onClick={() => {
              this.setState({ string: "Andrei" });
            }}
          >
            Change the Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
