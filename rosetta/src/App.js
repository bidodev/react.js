import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      books: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=harry+potter+inauthor:rowling&maxResults=10&langRestrict=pt"
    );
    const data = await response.json();
    this.setState({ books: data.items });
  }

  render() {
    return (
      <div className="App">
        {this.state.books.map(book => (
          <h1 key={book.id}>{book.volumeInfo.title}</h1>
        ))}
      </div>
    );
  }
}

export default App;
