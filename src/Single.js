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
      <div className="container">
        <h1 className="nn_page-title">{title}</h1>
        <span className="nn_page-date">{dated}</span>
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
