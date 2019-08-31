import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Skeleton from "react-loading-skeleton";

class About extends Component {

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
    const pageTitle = "About";

    return (
      <Fragment>
        <Helmet>
          <title>{ pageTitle }</title>
        </Helmet>
        <h1>{ loaded ? pageTitle  : <Skeleton />}</h1>
      </Fragment>
    );
  }
}

export default About;
