import React, { Component } from 'react';
import _Router from './components/_Router';
import _NavBar from './components/_NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Working</h1>
        <_Router />
        <_NavBar />
      </div>
    );
  }
}

export default App;
