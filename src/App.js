import React, { Component, Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import NotFound from "./NotFound";

// Google Analytics
const history = createBrowserHistory();
ReactGA.initialize("UA-21264529-1");

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={ history }>
          <Navbar />
          <main className="container">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/about" component={ About } />
              <Route path="/projects" component={ Projects } />
              <Route component={ NotFound } />
            </Switch>

            <footer className="colophon">naeemnur  &copy; 2010 - 2019 | <a target="_blank" href="https://github.com/naeemnur/naeemnur.com"> view source</a> </footer>
          </main>
        </Router>
      </Fragment>
    );
  }
}

export default App;
