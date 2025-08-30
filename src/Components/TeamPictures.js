import React from "react";
import RoundedPicture from "./RoundedPicture";
import "../CSS/HomePage.css";

const TeamPictures = (props) => {
  return (
    <div className="MemberBox">
      <RoundedPicture
        image={require(`../assets/${props.pic}`)}
        person={props.Name}
      />
      <h2 className="MemberNameText">{props.Name}</h2>
      <p className="MemberPositionText">{props.position}</p>
    </div>
  );
};

export default TeamPictures;
