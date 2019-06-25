import React, { Component } from 'react';
import 'materialize-css';
import SearchForm from './SearchForm';

class Home extends Component {
  render() {
    return (
    <div className="Home">
      <h1>RenoMaybe</h1>
      <SearchForm />
      
    </div>
    );
  }
}
export default Home;
