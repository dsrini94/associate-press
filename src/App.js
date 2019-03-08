import React, { Component } from 'react';

import HomePage from './views/homePage/homePage.js';
import LoginPage from './views/loginPage/loginPage.js';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
