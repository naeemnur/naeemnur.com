import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import posts from "./posts";
import { NavLink } from "react-router-dom";

const pageTitle = "Blog";

const Blog = () => (
  <Fragment>
    <Helmet>
      <title>{pageTitle} - Naeem Noor</title>
    </Helmet>

    <div className="nn_hero nn_about">
          <div className="container">
            <h1>{pageTitle}</h1>
            <p>Rants, links, thoughts and the occasional Haiku.</p>
          
          </div>
        </div>

    <div className="container">
      <ul className="nn_blog-list">
        {[...posts()].map(post => {
          const url = post[0];
          //const { title } = post[1];
          const { title, date } = post[1];

          var d = new Date(date);
          var dated = d
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, "/");
        
          return (
            <li>
              <NavLink
                key={url}
                style={{ display: "block" }}
                to={"/post/" + url}
              >
                {title}
                <span class="blog-date-archive">{dated}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  </Fragment>
);

export default Blog;
