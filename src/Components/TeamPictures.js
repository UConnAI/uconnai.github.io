import React from "react";
import RoundedPicture from "./RoundedPicture";
import AlexMoment from "../assets/Alex-Moment.jpg";
import "../CSS/App.css";

const TeamPictures = () => {
  return (
    <div>
      <img className="teamPic" src={AlexMoment} />
    </div>
  );
};

export default TeamPictures;
