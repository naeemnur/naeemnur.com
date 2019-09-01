import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

class Home extends Component {
  state = {
    isLoading: false
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isLoading: true });
    }, 600);
  }

  render() {
    const loaded = this.state.isLoading;
    const pageTitle = "Hi, I'm Naeem.";
    const pageContent = `I’m a Web / Frontend developer, mostly working around WordPress, PHP, MySql. Currently focusing on JavaScript, React.js and JAMStack. I'm a Maker at heart, so I love taking a raw thought and building it to completion.`;

    return (
      <Fragment>
        <Helmet>
          <title>WordPress Developer Bahrain - Naeem Noor</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="nn_hero">
          <SkeletonTheme color="#888" highlightColor="#999">
            <h1>{loaded ? pageTitle : <Skeleton width={215} />}</h1>
            <p>{loaded ? pageContent : <Skeleton count={3} />}</p>
          </SkeletonTheme>
        </div>
        <div className="nn_featured">
          <h3>Featured projects</h3>
          <p>Projects that I've built</p>
          <NavLink to="/projects/" strict>
            view all
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default Home;
