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
    <h1 className="nn_page-title">{pageTitle}</h1>
    <ul>
      {[...posts()].map(post => {
        const url = post[0];
        const { title } = post[1];
        return (
          <li>
            <NavLink key={url} style={{ display: "block" }} to={"/post/" + url}>
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  </Fragment>
);

export default Blog;
