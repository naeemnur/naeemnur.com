import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="nn_colophon">
      <a
      target="_blank"
      rel="noopener noreferrer"
      href="mailto:naeemnur@gmail.com"
    >naeemnur</a> &copy; {date.getFullYear()}
    </footer>
  );
};

export default Footer;