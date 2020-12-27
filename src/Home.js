import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Project } from "./Projects";

class Home extends Component {
  render() {
    const pageTitle = "Hi, I'm Naeem.";
    const pageContent = `I’m a self-taught Web / Frontend developer. I mostly work around WordPress, PHP, MySQL. I'm currently focusing on JavaScript, React.js and JAMStack. I'm a creator at heart, so I enjoy taking a raw thought and building it to completion.`;
    const projectHeading = "Latest projects";

    return (
      <Fragment>
        <Helmet>
          <title>Naeem Noor - Web / Frontend Developer Bahrain</title>
          <meta name="description" content={pageContent} />
        </Helmet>

        <div className="nn_hero">
          <div className="container">
            <h1>{pageTitle}</h1>
            <p>{pageContent}</p>
            <NavLink className="nn_about-nayme" to="/about/" strict>
              more about me &rarr;
            </NavLink>
          </div>
        </div>

        <div className="container">
          <div className="nn_featured">
            <h2>{projectHeading}</h2>

            <Project
            date="December 2020"
            desc="Free privacy policy hosting for mobile app developers (iOS & Android)"
            domain="policytrail.com"
            pClass="nn_project nn_ptrail"
            title="PolicyTrail"
            url="https://policytrail.com/"
            status="Active"
          />

          <Project
            date="November 2020"
            desc="Find how much money you would have made if you invested in..."
            domain="ifyoubought.xyz"
            pClass="nn_project nn_iybxyz"
            title="If You Bought XYZ"
            url="https://ifyoubought.xyz/"
            status="Autopilot"
          />

          <Project
            date="October 2020"
            desc="Travel thru time and explore your favorite tech products, then & now."
            domain="techrewind.co"
            pClass="nn_project nn_techrewind"
            title="TechRewind"
            url="https://techrewind.co/"
            status="Active"
          />


            <NavLink className="nn_view-projects" to="/projects/" strict>
              View all projects &rarr;
            </NavLink>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
