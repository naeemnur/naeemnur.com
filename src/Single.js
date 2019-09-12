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
      <h1>{title}</h1>
      <span>{dated}</span>
      <div
        className="body"
        dangerouslySetInnerHTML={{ __html: __content }}
      ></div>
      <NavLink to={"/blog/"}>« Back</NavLink>
    </Fragment>
  );
};

export default Single;
