import React, { Component } from 'react';
import _Router from './components/_Router';
import _NavBar from './components/_NavBar';
import _Header from './components/_Header';
import _Footer from './components/_Footer';
import _Post from './components/_Post';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <_Router />
      <_NavBar />
      <_Header /> 
      <_Post />
      <_Footer />
    </React.Fragment>       
    );
  }
}

export default App;
