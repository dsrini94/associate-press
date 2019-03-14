import React, { Component } from 'react';

import LoginPage from './views/loginPage/loginPage.js';
import HomePage from './views/homePage/homePage.js';
import YoutubeResult from './views/youtubeResult/youtubeResult.js';
import Search from './views/search/search.js';
import AdvancedSearch from './views/advancedSearch/advancedSearch.js';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/youtubeResult" component={YoutubeResult} />
          <Route path="/search" component={Search} />
          <Route path="/advancedSearch" component={AdvancedSearch} />
        </div>
      </Router>
    );
  }
}

export default App;
