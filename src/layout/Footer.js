import React from "react";

const Footer = () => {
  return (
    <div className="page-footer">
        <div className="footer-copyright">
      <div className="container">
        © {new Date().getFullYear()} Copyright Movie
        <a className="grey-text text-lighten-4 right" href="#!">
          Movie
        </a>
      </div>
    </div>
    </div>
  );
};

export default Footer;
