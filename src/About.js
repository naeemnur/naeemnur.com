import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

class About extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>About</title>
        </Helmet>
        <h1>About</h1>
      </Fragment>
    );
  }
}

export default About;
