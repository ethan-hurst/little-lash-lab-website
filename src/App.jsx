import React, { Component } from 'react';
import _Router from './components/_Router';
import _NavBar from './components/_NavBar';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <_Router />
      <_NavBar /> 
    </React.Fragment>       
    );
  }
}

export default App;
