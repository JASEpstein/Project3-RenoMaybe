import React, { Component } from 'react';
//import 'materialize-css';
//import LocationSearchInput from './AutocompleteInput';
import SearchContainer from './SearchContainer'

class Home extends Component {
  render() {
    return (
    <div className="Home">
      <h1>RenoMaybe</h1>
      <SearchContainer />
    </div>
    );
  }
}
export default Home;
