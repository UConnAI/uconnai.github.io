import React from "react";

function LeftProjectTitle(props) {
  return (
    <div className="LeftProject">
      <div className="image">
        <img
          src={props.Image}
          alt={props.Image}
          className="ProjectLeftPic"
        ></img>
      </div>
      <div className="ProjectText">
        <h3 className="ProjectTitleHeading"> {props.Title}</h3>
        <p>{props.Description}</p>
      </div>
    </div>
  );
}

export default LeftProjectTitle;
