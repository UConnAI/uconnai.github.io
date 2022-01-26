import React from "react";
import InstagramIcon from "../white.png";
import "../CSS/MemberBox.css";

function Footer() {
  return (
    <div className="Footer">
      <a href="https://www.instagram.com/uconndsaiclub/">
        <img
          src={InstagramIcon}
          alt={InstagramIcon}
          className="InstagramLogo"
        />
      </a>
      <h4 className="CopyrightFooter">© UConn AI Club</h4>
    </div>
  );
}
export default Footer;
