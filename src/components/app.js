import React, { Component } from 'react';


// api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml

import SearchBar from '../containers/search_bar'
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchBar/>
      </div>
    );
  }
}
