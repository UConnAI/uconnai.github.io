import React from "react";
import "../CSS/MemberBox.css";

function RoundedPicture(props) {
  const size = "200";
  let person = props.person;
  let ErrorImage = "Failed to load " + person + "'s image";
  return (
    <div>
      <img
        src={props.image}
        alt={ErrorImage}
        width={size}
        className="RoundedImage"
      />
    </div>
  );
}

export default RoundedPicture;
