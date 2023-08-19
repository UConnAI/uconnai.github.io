import React from "react";
import TestPicture from "../image0.jpg";
import "../CSS/MemberBox.css";
function Tutorial(props) {
  return (
    <div className="TutorialBox">
      <div>
        <img
          src={props.Image}
          alt={TestPicture}
          width="536"
          height="402"
          className="TutorialPicture"
        ></img>
      </div>
      <h1 className="TutorialText">{props.Title}</h1>
      <h3 className="TutorialText2">{props.Description}</h3>
      {/* If we ever wanna change anything defined it with classNames for that */}
    </div>
  );
}
export default Tutorial;
