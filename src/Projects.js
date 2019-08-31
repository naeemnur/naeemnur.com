import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Skeleton from "react-loading-skeleton";

class Projects extends Component {

  state = {
    isLoading: false
  }

  componentDidMount() {
      setInterval(() => {
          this.setState({isLoading:true})
      }, 600);
  }

  render() {

    const loaded = this.state.isLoading;
    const pageTitle = "Projects";

    return (
      <Fragment>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <h1>{ loaded ? pageTitle  : <Skeleton />}</h1>
        <p></p>
      </Fragment>
    );
  }
}

export default Projects;
