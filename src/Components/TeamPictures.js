import React from "react";
import RoundedPicture from "./RoundedPicture";
import AlexMoment from "../Alex-Moment-Pic.jpg";
import "../CSS/App.css";

const TeamPictures = () => {
  return (
    <div>
      <img className="teamPic" src={AlexMoment} />
    </div>
  );
};

export default TeamPictures;
