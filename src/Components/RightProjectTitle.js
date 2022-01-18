import React from "react";

function RightProjectTitle(props) {
  return (
    <div className="RightProject">
      <div className="ProjectTextRight">
        <h3 className="ProjectTitleHeading"> {props.Title}</h3>
        <p>{props.Description}</p>
      </div>

      <div className="image">
        <img
          src={props.Image}
          alt={props.Image}
          className="ProjectRightPic"
        ></img>
      </div>
    </div>
  );
}

export default RightProjectTitle;
