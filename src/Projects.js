import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

class Projects extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Projects</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <h1>Project</h1>
      </Fragment>
    );
  }
}

export default Projects;
