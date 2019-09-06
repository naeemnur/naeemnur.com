import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export const Project = props => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={props.class}
      href={props.url}
    >
      <h4 className="nn_project-title">{props.title}</h4>
      <p className="nn_project-desc">{props.desc}</p>
      <div className="nn_project-meta">
        <span className="nn_project-url">{props.domain}</span>
        <span title="Date launched" className="nn_project-date">
          {props.date}
        </span>
      </div>
    </a>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  domain: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
  class: PropTypes.string,
};

class Projects extends Component {
  render() {
    const pageTitle = "Projects";

    return (
      <Fragment>
        <Helmet>
          <title>{pageTitle} - Naeem Noor</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <h1 className="nn_page-title">{pageTitle}</h1>
        <div className="nn_featured">
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
            desc="AcquiredBy is a growing database of tech industry acquisitions"
            domain="acquiredby.co"
            date="June 2017"
            class="nn_project nn_acquiredby"
          />

          <Project
            url="https://exchainged.co/"
            title="ExChainged"
            desc="A hub for token rates, tokens, and exchanges that support them"
            domain="exchainged.co"
            date="February 2019"
            class="nn_project nn_exchainged"
          />

          <Project
            url="https://faangwat.ch/"
            title="FAANGWatch"
            desc="End of day stock prices of key tech giants"
            domain="faangwat.ch"
            date="March 2019"
            class="nn_project nn_faang"
          />

          <Project
            url="https://unicornrepublic.co/"
            title="Unicorn Republic"
            desc="Curated list of startups that evolved into $1 Billion+ corporations"
            domain="unicornrepublic.co"
            date="February 2019"
            class="nn_project nn_urepublic"
          />

          <Project
            url="https://workingti.me/"
            title="Working Time"
            desc="Working Time displays the average working hours per week around the globe"
            domain="workingti.me"
            date="January 2019"
            class="nn_project nn_workingtime"
          />
        </div>
      </Fragment>
    );
  }
}

export default Projects;
