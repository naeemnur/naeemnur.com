import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="nn_colophon">
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:naeemnur@gmail.com"
        >
          Email me
        </a>
      </p>
      naeemnur &copy; {date.getFullYear()}
    </footer>
  );
};

export default Footer;