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
        <Router history={history}>
          <Navbar />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/projects/" component={Projects} />
              <Route component={NotFound} />
            </Switch>

            <footer className="nn_colophon">
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/naeemol"
                >
                  Twitter
                </a>{" "}
                •{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com/naeemnur/"
                >
                  Instagram
                </a>{" "}
                •{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/naeemnur/"
                >
                  Linkedin
                </a>{" "}
                •{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/naeemnur"
                >
                  Github
                </a>{" "}
                •{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://producthunt.com/@naeemol"
                >
                  PH
                </a>{" "}
                •{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:naeemnur@gmail.com"
                >
                  Mail
                </a>
              </p>
              naeemnur &copy; 2019 •&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/naeemnur/naeemnur.com"
              >
                source code
              </a>
            </footer>
          </main>
        </Router>
      </Fragment>
    );
  }
}

export default App;
