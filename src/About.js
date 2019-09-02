import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Skeleton from "react-loading-skeleton";
import nayme from "./nayme.png";

class About extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ isLoading: false });
    }, 600);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const loaded = this.state.isLoading;
    const pageTitle = "About";

    return (
      <Fragment>
        <Helmet>
          <title>{pageTitle} - Naeem Noor</title>
        </Helmet>
        <h1 className="nn_page-title">{loaded ? <Skeleton /> : pageTitle}</h1>

        <img src={nayme} className="App-logo" alt="logo" />
        <p>
          Hi, my name is Naeem. I’m a self-taught web developer, building
          well-made websites with WordPress. I first used the internet in 2001
          and built my first website within weeks and finally started to work as
          a professional web developer in 2008.
        </p>

        <h2>Skillset</h2>
        <div>
          <strong>Core</strong>: JavaScript, CSS3, HTML5, PHP, MySQL, Mobile and
          Responsive Design
        </div>
        <div>
          <strong>Libraries</strong>: React.js, Gatsby, Express, jQuery,
          Bootstrap and Tailwind CSS
        </div>
        <div>
          <strong>CMS</strong>: WordPress Themeing / Plugins
        </div>
        <h2>Currently Using</h2>
        <ul>
          <li>Computer: MacBook Pro 2017 13'</li>
          <li>Hosting: Netlify (personal site), Dreamhost (side projects)</li>
          <li>Editor: Visual Studio Code</li>
          <li>Code Syntax Theme: Ayu Mirage</li>
          <li>Notes: SimpleNote</li>
        </ul>
      </Fragment>
    );
  }
}

export default About;
