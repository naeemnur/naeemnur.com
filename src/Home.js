import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

class Home extends Component {

  render() {
    const pageTitle = "Hi, I'm Naeem.";
    const pageContent = `I’m a self-taught Web / Frontend developer. I mostly work around WordPress, PHP, MySQL. I'm currently focusing on JavaScript, React.js and JAMStack. I'm a creator at heart, so I enjoy taking a raw thought and building it to completion.`;
    const projectHeading = "Selected Projects";

    return (
      <Fragment>
        <Helmet>
          <title>Naeem Noor - Web / Frontend Developer Bahrain</title>
          <meta name="description" content="{pageContent }" />
        </Helmet>
        <div className="nn_hero">
            <h1>{pageTitle}</h1>
            <p>{pageContent}</p>
        </div>

        <div className="nn_featured">
          <h2>
            {projectHeading}
          </h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nn_project nn_gcemetery"
            href="https://gcemetery.co"
          >
            <h4 className="nn_project-title">The Google Cemetery</h4>
            <p className="nn_project-desc">
              Complete list of dead Google products / services, when and why
              they died.
            </p>
            <div className="nn_project-meta">
              <span className="nn_project-url">gcemetery.co</span>
              <span title="Date launched" className="nn_project-date">
                November 2018
              </span>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nn_project nn_acquiredby"
            href="https://acquiredby.co"
          >
            <h4 className="nn_project-title">AcquiredBy</h4>
            <p className="nn_project-desc">
              AcquiredBy is a growing database of tech industry acquisitions.
            </p>
            <div className="nn_project-meta">
              <span className="nn_project-url">acquiredby.co</span>
              <span title="Date launched" className="nn_project-date">
                April 2017
              </span>
            </div>
          </a>

          <NavLink className="nn_view-projects" to="/projects/" strict>
            View all projects &rarr;
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default Home;
