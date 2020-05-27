import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dogs: [],
    };
  }
  async componentDidMount() {
    const data = await fetch("https://dog.ceo/api/breed/hound/images/random/6");
    const res = await data.json();
    this.setState({ dogs: res.message });
  }

  render() {
    return (
      <div className="App">
        {this.state.dogs.map(book => (
          <figure>
            <img src={`${book}`} alt="" />
          </figure>
        ))}
      </div>
    );
  }
}
export default App;
