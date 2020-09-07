import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

class About extends Component {
  render() {
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
        <div className="container">
          <h1 className="nn_page-title">{pageTitle}</h1>
          <p>{pageContent}</p>
          <p>{pageContentCont}</p>

          <h2>Skills & Expertise</h2>
          <ul>
            <li>
              <strong>Core</strong>: HTML5, CSS3, JavaScript, RWD, PHP and MySQL
            </li>
            <li>
              <strong>Libraries</strong>: React.js, jQuery and Tailwind CSS
            </li>
            <li>
              <strong>CMS</strong>: WordPress (Themes / Plugins)
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
            This website was built using React, Sass and other tools. Hosted
            on Netlify.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default About;
