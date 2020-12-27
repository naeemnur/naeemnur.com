import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="nn_colophon">
    <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/naeemol"
        >
          Twitter
        </a>
        •
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/naeemnur/"
        >
          Instagram
        </a>
        •
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/naeemnur/"
        >
          Linkedin
        </a>
        •
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/naeemnur"
        >
          Github
        </a>
        •
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://producthunt.com/@naeemol"
        >
          PH
        </a>
        •
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:naeemnur@gmail.com"
        >
          Email
        </a>
      </p>
      naeemnur.com &copy; 2010 - {date.getFullYear()}
    </footer>
  );
};

export default Footer;