import React from "react";
import { DogsList } from "./components/dog-list/dog-list.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dogs: [],
    };
  }
  async componentDidMount() {
    try {
      const data = await fetch(
        "https://dog.ceo/api/breed/retriever/images/random/9"
      );
      const res = await data.json();
      this.setState({ dogs: res.message });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <DogsList dogs={this.state.dogs} />
      </div>
    );
  }
}
export default App;
