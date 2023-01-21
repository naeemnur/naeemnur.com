import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Photos from "./Photos";
import Blog from "./Blog";
import Single from "./Single";
//import Projects from "./Projects";
import NotFound from "./NotFound";
import Footer from "./Footer";

// Google Analytics
const history = createBrowserHistory();
ReactGA.initialize("UA-21264529-1");

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
  window.scrollTo(0, 0); // take page back to top on view change
});

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/photos/" component={Photos} />
          <Route path="/blog/" component={Blog} />
          <Route path="/post/:title/" component={Single} />
          {/* <Route path="/projects/" component={Projects} /> */}
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
