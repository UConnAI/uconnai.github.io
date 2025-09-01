import React from "react";
import "../CSS/NavagationBar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";


const NavagationBar = ({ sticky }) => {
  return (
    <nav className="navbar">

      <div className="textHeader">
        <Link to="/">
          <img src={logo} alt="UConn AI Logo" height="45px" style={{ marginTop: "10px", marginBottom: "0px" }}/>
        </Link>
      </div>

      <div className="navbar-link">
        {/* <Link to="/TeamPage" className="navbar-link-item">
          Team
        </Link> */}

        {/* <Link to="/ProjectsPage" className="navbar-link-item">
          Projects
        </Link> */}

        <Link to="/TutorialPage" className="navbar-link-item">
          Tutorials
        </Link>

        {/* <Link to="JoinPage">
          <div className="joinText">Join</div>
        </Link> */}

        {/* eslint-disable-next-line */}
        <a target="_blank" href="https://linktr.ee/uconnaiclub">
          <div className="joinText">Join</div>
        </a>
      </div>
    </nav>
  );
};
export default NavagationBar;
