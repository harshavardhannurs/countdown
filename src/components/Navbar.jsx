import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand-name">Countdown</div>
      <a href="https://github.com/harshavardhannurs">
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </a>
    </div>
  );
};

export default Navbar;
