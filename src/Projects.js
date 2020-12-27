import React, { Component, Fragment } from "react";
import { string } from "prop-types";
import { Helmet } from "react-helmet";

export const Project = ({ date, desc, domain, pClass, title, url, status }) => (
  <a target="_blank" rel="noopener noreferrer" className={pClass} href={url}>
    <h4 className="nn_project-title">{title}</h4>
    <p className="nn_project-desc">{desc}</p>
    <div className="nn_project-meta">
      <span className="nn_project-url">{domain}</span>
      <span title="Date launched" className="nn_project-date">
        {date}
      </span>
      <span title="Status" className="nn_project-status">
        {status}
      </span>
    </div>
  </a>
);

Project.propTypes = {
  date: string,
  status: string,
  desc: string,
  domain: string,
  pClass: string,
  title: string,
  url: string,
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
        <div className="container">
          <h1 className="nn_page-title">{pageTitle}</h1>
          <div className="nn_featured">

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

            <Project
              date="October 2019"
              desc="Most used repositories on Github"
              domain="usedby.dev (defunct)"
              pClass="nn_project nn_usedby dead"
              title="Usedby"
              url="https://usedby.dev/"
              status="Dead"
            />

            <Project
              date="November 2018"
              desc="Complete list of dead Google products / services, when and why
            they died."
              domain="gcemetery.co"
              pClass="nn_project nn_gcemetery"
              title="The Google Cemetery"
              url="https://gcemetery.co/"
              status="Acquired"
            />

            <Project
              date="June 2017"
              desc="AcquiredBy is a growing database of tech industry acquisitions"
              domain="acquiredby.co"
              pClass="nn_project nn_acquiredby"
              title="AcquiredBy"
              url="https://acquiredby.co/"
              status="Acquired"

            />

            <Project
              date="February 2019"
              desc="A hub for token rates, tokens, and exchanges that support them"
              domain="exchainged.co (defunct)"
              pClass="nn_project nn_exchainged"
              title="ExChainged"
              url="https://exchainged.co/"
              status="Dead"
            />

            <Project
              date="March 2019"
              desc="End of day stock prices of key tech giants"
              domain="faangwat.ch"
              pClass="nn_project nn_faang"
              title="FAANGWatch"
              url="https://faangwat.ch/"
              status="Autopilot"
            />

            <Project
              date="February 2019"
              desc="Curated list of startups that evolved into $1 Billion+ corporations"
              domain="unicornrepublic.co"
              pClass="nn_project nn_urepublic"
              title="Unicorn Republic"
              url="https://unicornrepublic.co/"
              status="Acquired"
            />

            <Project
              date="January 2019"
              desc="Working Time displays the average working hours per week around the globe"
              domain="workingti.me"
              pClass="nn_project nn_workingtime"
              title="Working Time"
              url="https://workingti.me/"
              status="Autopilot"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Projects;
