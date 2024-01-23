import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Project } from "./Projects";

class Home extends Component {
  render() {
    const pageTitle = "Hi, I'm Naeem.";
    const pageContent = `I’m a self-taught Web developer based in 🇧🇭 Bahrain. I mostly work around WordPress, PHP, MySQL. I'm a creator at heart, so I enjoy taking a raw thought and building it to completion.`;
    const projectHeading = "Side projects";

    return (
      <Fragment>
        <Helmet>
          <title>Web Developer Bahrain | Naeem Noor</title>
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
            <h2>{projectHeading} &not;</h2>

            <Project
              date="2024"
              desc="RC cars part lists and build Logs"
              pClass="nn_project nn_rc"
              title="RCFlex"
              url="https://rcflex.net/"
              status="Live"
            />

            <Project
              date="2023"
              desc="A digital playground of ideas and experiments"
              pClass="nn_project nn_ms"
              title="mildspring"
              url="https://mildspring.co/"
              status="Live"
            />

            <Project
              date="2023"
              desc="Flag Color Codes in HEX, RGB, CMYK, HSL & HSV"
              pClass="nn_project nn_fp"
              title="Flag Palette"
              url="https://flagpalette.com/"
              status="Acquired"
            />

          <Project
              date="2023"
              desc="Ancient Writing & Numbering systems"
              pClass="nn_project nn_ng"
              title="nGlot"
              url="https://nglot.com/"
              status="Shutdown"
            />

            <Project
              date="2022"
              desc="Sell, Buy &amp; Discover pre-revenue side projects and MVPs."
              pClass="nn_project nn_za"
              title="ZeroAcquire"
              url="https://zeroacquire.com/"
              status="Acquired"
            />

            <Project
              date="2022"
              desc="Create and share your online resume. No non-sense resumes."
              pClass="nn_project nn_tr"
              title="Tiny Resume"
              url="https://tinyresume.co/"
              status="Acquired"
            />

            <Project
              date="2022"
              desc="Modern era inventions that changed the world and some didnt."
              pClass="nn_project nn_ib"
              title="InventedBy"
              url="https://inventedby.co"
              status="Acquired"
            />

            <Project
              date="2021"
              desc="Discover the symbols of the World and their meanings."
              pClass="nn_project nn_sh"
              title="Symbol Hunt"
              url="https://symbolhunt.com"
              status="Acquired"
            />

            <Project
              date="2020"
              desc="Free privacy policy hosting for mobile app developers (iOS & Android)"
              // domain="policytrail.com"
              pClass="nn_project nn_ptrail"
              title="PolicyTrail"
              url="https://policytrail.com/"
              status="Acquired"
            />

            <Project
              date="2020"
              desc="Find how much money you would have made if you invested in..."
              // domain="ifyoubought.xyz"
              pClass="nn_project nn_iybxyz"
              title="If You Bought XYZ"
              url="https://ifyoubought.xyz/"
              status="Acquired"
            />

            <Project
              date="2020"
              desc="Travel thru time and explore your favorite tech products, then & now."
              // domain="techrewind.co"
              pClass="nn_project nn_techrewind"
              title="TechRewind"
              url="https://techrewind.co/"
              status="Acquired"
            />

            <Project
              date="2019"
              desc="A list of most used and popular repositories on Github"
              // domain="usedby.dev"
              pClass="nn_project nn_usedby dead"
              title="Usedby"
              url="https://usedby.dev/"
              status="Dead"
            />

            <Project
              date="2019"
              desc="Auto updating end of day stock prices of key tech giants"
              // domain="faangwat.ch"
              pClass="nn_project nn_faang"
              title="FAANGWatch"
              url="https://faangwat.ch/"
              status="Dead"
            />

            <Project
              date="2019"
              desc="Curated list of startups that evolved into $1 Billion+ corporations"
              // domain="unicornrepublic.co"
              pClass="nn_project nn_urepublic"
              title="Unicorn Republic"
              url="https://unicornrepublic.co/"
              status="Acquired"
            />

            <Project
              date="2019"
              desc="A hub for token rates, tokens, and exchanges that support them"
              // domain="exchainged.co"
              pClass="nn_project nn_exchainged"
              title="ExChainged"
              url="https://exchainged.co/"
              status="Dead"
            />

            <Project
              date="2019"
              desc="Average working hours per week around the globe."
              // domain="workingti.me"
              pClass="nn_project nn_workingtime"
              title="Working Time"
              url="https://workingti.me/"
              status="Dead"
            />

            <Project
              date="2018"
              desc="Dead Google products, when and why they died."
              // domain="gcemetery.co"
              pClass="nn_project nn_gcemetery"
              title="The Google Cemetery"
              url="https://gcemetery.co/"
              status="Acquired"
            />

            <Project
              date="2018"
              desc="Know the future price of crypto currencies using AI."
              pClass="nn_project nn_kp dead"
              title="KryptoPredict"
              url="#"
              status="Dead"
            />

            <Project
              date="2018"
              desc="A user-driven approach to discussing cryptocurrencies"
              pClass="nn_project nn_cn dead"
              title="Coinavy"
              url="#"
              status="Dead"
            />

            <Project
              date="2017"
              desc="A definitive list of tech acquisitions."
              // domain="acquiredby.co"
              pClass="nn_project nn_acquiredby"
              title="AcquiredBy"
              url="https://acquiredby.co/"
              status="Acquired"
            />

            <Project
              date="2017"
              desc="Default Nameservers of Web Hosting Companies."
              pClass="nn_project nn_whns dead"
              title="WHNS"
              url="#"
              status="Dead"
            />

            <Project
              date="2015"
              desc="A fun little site where you become a soccer referee."
              pClass="nn_project nn_sr dead"
              title="Straight Red"
              url="#"
              status="Dead"
            />

            <Project
              date="2009"
              desc="Code snippets, tools, resources for developers."
              pClass="nn_project nn_cssr dead"
              title="CSSReflex"
              url="https://cssreflex.com"
              status="Acquired"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;