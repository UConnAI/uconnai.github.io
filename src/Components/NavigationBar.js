import React from "react";
import "../CSS/NavagationBar.css";
import { Link } from "react-router-dom";

const NavagationBar = ({ sticky }) => {
  return (
    <nav className="navbar">
      <div className="textHeader">
        <Link to="/">UConn AI</Link>
      </div>
      <div className="navbar-link">
        <Link to="/TeamPage" className="navbar-link-item">
          Team
        </Link>
        {/* <Link to="/ProjectsPage" className="navbar-link-item">
          Projects
        </Link> */}
        <Link to="/TutorialPage" className="navbar-link-item">
          Tutorials
        </Link>
        {/* <Link to="JoinPage">
          <div className="joinText">Join</div>
        </Link> */}
        <a target="_blank" href="https://linktr.ee/uconnaiclub">
          <div className="joinText">Join</div>
        </a>
      </div>
    </nav>
  );
};
export default NavagationBar;
