import React, { Component } from 'react';
import './App.css';

import CardList from './component/CardList/CardList';
import SearchBox from 'component/searchBox/SearchBox';
class App extends Component {
  constructor() {
    super();
    this.state = {
      mosters: [],
      searchField: '',
    };
  }
  async componentDidMount() {
    var res = await fetch('https://jsonplaceholder.typicode.com/users');
    this.setState({ mosters: await res.json() });
    // res = await res.json();
  }
  searchInput = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { mosters, searchField } = this.state;
    const mostersList = mosters.filter((moster) =>
      moster.name.toLowerCase().match(searchField)
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search results"
          searchInput={this.searchInput}
        />
        <CardList mosters={mostersList} />
      </div>
    );
  }
}
export default App;
