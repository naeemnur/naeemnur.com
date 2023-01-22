import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";
import posts from "./posts";
import "github-markdown-css";

const Single = ({ match }) => {
  var post;

  // eslint-disable-next-line
  [...posts()].map(item => {
    const url = item[0];
    if (url === match.params.title) {
      post = item;
    }
  });

  const { title, date, __content } = post[1];

  var d = new Date(date);
  var dated = d
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "/");

  return (
    <Fragment>
      <Helmet>
        <title>{title} - Blog - Naeem Noor</title>
      </Helmet>

      <div className="nn_hero nn_about">
          <div className="container">
            <h1>{title}</h1>
            <p>{dated}</p>
          
          </div>
        </div>

      <div className="container">
        <div
          className="nn_page-body"
          dangerouslySetInnerHTML={{ __html: __content }}
        ></div>
        <NavLink className="nn_page-back" to={"/blog/"}>
          « Back
        </NavLink>
      </div>
    </Fragment>
  );
};

export default Single;
