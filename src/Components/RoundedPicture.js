import React from "react";
import "../CSS/MemberBox.css";

function RoundedPicture(props) {
  const size = "200";
  let person = props.person;
  let ErrorImage = "Failed to load " + person + "'s image";
  return (
    <div className="X">
      <img
        src={props.image}
        alt={ErrorImage}
        width={size}
        className="RoundedImage"
      ></img>
    </div>
  );
}

export default RoundedPicture;
