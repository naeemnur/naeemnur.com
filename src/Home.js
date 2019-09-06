import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Project } from "./Projects";

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
          <h2>{projectHeading}</h2>
          <Project
            url="https://gcemetery.co/"
            title="The Google Cemetery"
            desc="Complete list of dead Google products / services, when and why
            they died."
            domain="gcmetery.co"
            date="November 2018"
            class="nn_project nn_gcemetery"
          />

          <Project
            url="https://acquiredby.co/"
            title="AcquiredBy"
            desc="AcquiredBy is a growing database of tech industry acquisitions."
            domain="acquiredby.co"
            date="June 2017"
            class="nn_project nn_acquiredby"
          />

          <NavLink className="nn_view-projects" to="/projects/" strict>
            View all projects &rarr;
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default Home;
