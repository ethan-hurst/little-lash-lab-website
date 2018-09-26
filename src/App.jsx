import React, { Component } from 'react';
import { _Router, _NavBar, _Footer } from './components';
import { Home, Contact, Faq, NotFound, Price } from './pages';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <_Router />
      </React.Fragment>
    );
  }
}

export default App;
