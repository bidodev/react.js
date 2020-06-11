import React, { Component } from 'react';
import axios from 'axios';
import { baseURL } from './config';

//cardlist component.
import CardList from './components/card-list/card-list-component';
import './components/card-list/card-list.styles.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  //live cycle methods.
  componentDidMount() {
    axios(baseURL).then((res) => {
      const { data } = res;
      this.setState({ monsters: data });
    });
  }

  //render method
  render() {
    const { monsters } = this.state;

    return (
      <div className="card-list">
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
