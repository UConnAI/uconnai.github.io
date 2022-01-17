import React from "react";
import "../CSS/NavagationBar.css";
import { Link } from "react-router-dom";

const NavagationBar = ({ sticky }) => {
  return (
    <nav className="navbar">
      <header className="textHeader">
        <Link to="/">UConn AI</Link>
      </header>
      <div className="navbar-link">
        <Link to="/TeamPage" className="navbar-link-item">
          Team
        </Link>
        <Link to="/ProjectsPage" className="navbar-link-item">
          Projects
        </Link>
        <Link to="/TutorialPage" className="navbar-link-item">
          Tutorials
        </Link>
        <button className="joinButton">
          <Link to="JoinPage">
            <div className="joinText">Join</div>
          </Link>
        </button>
      </div>
    </nav>
  );
};
export default NavagationBar;
