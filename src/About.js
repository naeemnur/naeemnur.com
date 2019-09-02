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
    const pageContent = `Hi 👋, my name is Naeem. I began my adventure with web development
    when I was just 12. I built sites with GeoCities before moving into
    coding layouts in tables. Fast forward a few years, and I'm still
    meddling about in HTML, CSS and JavaScript, reading and launching out
    of the box websites in my free time.`;
    const pageContentCont = `My key interests lie in front-end development, performance, and
    JavaScript applications (although I'm still learning)`;

    return (
      <Fragment>
        <Helmet>
          <title>{pageTitle} - Naeem Noor</title>
        </Helmet>
        <h1 className="nn_page-title">
          {loaded ? <Skeleton width={75} /> : pageTitle}
        </h1>

        <div className="nayme-photo">
          {loaded ? (
            <Skeleton circle={true} height={251} width={250} />
          ) : (
            <img src={nayme} alt="Naeem in flesh" />
          )}
        </div>
        <p>{loaded ? <Skeleton count={5} width={536} /> : pageContent}</p>
        <p>{loaded ? <Skeleton count={2} width={464} /> : pageContentCont}</p>

        <h2>{loaded ? <Skeleton width={160} /> : "Skills & Expertise"}</h2>
        <ul>
          <li>
            <strong>Core</strong>: HTML5, CSS3, JavaScript, RWD PHP and MySQL
          </li>
          <li>
            <strong>Libraries</strong>: React.js, jQuery and Tailwind CSS
          </li>
          <li>
            <strong>CMS</strong>: WordPress Themeing / Plugins
          </li>
        </ul>
        <h2>Currently Using</h2>
        <ul>
          <li>
            <strong>Computer</strong>: MacBook Pro 2017 13'
          </li>
          <li>
            <strong>Editor</strong>: Visual Studio Code
          </li>
          <li>
            <strong>Font</strong>: PragmataPro
          </li>
          <li>
            <strong>Code Syntax Theme</strong>: Ayu Mirage
          </li>
          <li>
            <strong>Notes</strong>: Notes (Mac)
          </li>
          <li>
            <strong>Todo</strong>: Wunderlist
          </li>
        </ul>
        <p>
          {loaded ? (
            <Skeleton width={550} />
          ) : (
            "This website was built using React, Sass and other tools. Hosted on Netlify."
          )}
        </p>
      </Fragment>
    );
  }
}

export default About;
