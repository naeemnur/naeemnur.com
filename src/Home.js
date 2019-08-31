import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Skeleton from "react-loading-skeleton";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>WordPress Developer Bahrain - Naeem Noor </title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <h1>{"Hi, there!" || <Skeleton />}</h1>
        <p>
          I’m Naeem — I design, develop, deploy, optimize, and maintain
          responsive websites using HTML, CSS, Javascript, PHP, &amp; WordPress.
        </p>
        <p>Feel free to get in touch with me at naeemnur@gmail.com.</p>
      </Fragment>
    );
  }
}

export default Home;
