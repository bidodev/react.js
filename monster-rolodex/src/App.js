import React, { Component } from 'react';
import axios from 'axios';
import { baseURL } from './config';

//cardlist component.
import CardList from './components/card-list/card-list-component';
import './components/card-list/card-list.styles.scss';

import Search from './components/search-field/search-field.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
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
      <div className="App">
        <input
          type="search"
          placeholder="Filter cats by Name.."
          onChange={(event) => this.setState({searchField: event.target.value}, ()=> console.log(this.state.searchField))}
        />
        <div className="card-list">
          {/* <Search /> */}
          <CardList monsters={monsters} />
        </div>
      </div>
    );
  }
}

export default App;
