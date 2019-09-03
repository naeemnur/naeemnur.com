import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

class Projects extends Component {
  
  render() {
    const pageTitle = "Projects";

    return (
      <Fragment>
        <Helmet>
          <title>{pageTitle} - Naeem Noor</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <h1 className="nn_page-title">
          {pageTitle}
        </h1>
        <div className="nn_featured">
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nn_project nn_exchainged"
            href="https://exchainged.co"
          >
            <h4 className="nn_project-title">ExChainged</h4>
            <p className="nn_project-desc">
              A hub for token rates, tokens, and exchanges that support them.
            </p>
            <div className="nn_project-meta">
              <span className="nn_project-url">exchainged.co</span>
              <span title="Date launched" className="nn_project-date">
                February 2019
              </span>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nn_project nn_faang"
            href="https://faangwat.ch"
          >
            <h4 className="nn_project-title">FAANGWatch</h4>
            <p className="nn_project-desc">
              End of day stock prices of key tech giants
            </p>
            <div className="nn_project-meta">
              <span className="nn_project-url">faangwat.ch</span>
              <span title="Date launched" className="nn_project-date">
                April 2019
              </span>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nn_project nn_urepublic"
            href="https://unicornrepublic.co"
          >
            <h4 className="nn_project-title">Unicorn Republic</h4>
            <p className="nn_project-desc">
              Curated list of startuos that evolved into $1 Billion+
              corporations
            </p>
            <div className="nn_project-meta">
              <span className="nn_project-url">unicornrepublic.co</span>
              <span title="Date launched" className="nn_project-date">
                Feb 2019
              </span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nn_project nn_workingtime"
            href="https://workingti.me"
          >
            <h4 className="nn_project-title">Working Time</h4>
            <p className="nn_project-desc">
              Working Time displays the average working hours per week around
              the globe
            </p>
            <div className="nn_project-meta">
              <span className="nn_project-url">workingti.me</span>
              <span title="Date launched" className="nn_project-date">
                Feb 2019
              </span>
            </div>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Projects;
