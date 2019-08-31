import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Skeleton from "react-loading-skeleton";

class Home extends Component {

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
    const pageTitle = "Hi, there!";
    const pageContent = `I’m Naeem — I design, develop, deploy, optimize, and maintain
          responsive websites using HTML, CSS, Javascript, PHP, &amp; WordPress.`;

    return (
      <Fragment>
        <Helmet>
          <title>WordPress Developer Bahrain - Naeem Noor </title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <h1>{ loaded ? pageTitle  : <Skeleton />}</h1>
        <p>{ loaded ? pageContent : <Skeleton count={2}/>}</p>
        <footer>Feel free to get in touch with me at naeemnur@gmail.com.</footer>
      </Fragment>
    );
  }
}

export default Home;
