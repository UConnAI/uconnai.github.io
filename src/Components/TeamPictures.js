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
      <h1 className="MemberNameText">{props.Name}</h1>
    </div>
  );
};

export default TeamPictures;
