import React from "react";
import "../utils/index.css";

const Footer = () => {
  return (
    <div className="footer font-serif">
      Developed with 🧡 and a lot of ☕️ by Pershant
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://github.com/pershantgoel"
        target="_blank"
        title="Pershant's Github profile"
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub"
          className="github-logo"
        />
      </a>
    </div>
  );
};

export default Footer;
