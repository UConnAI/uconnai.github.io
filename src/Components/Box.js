import React from "react";
import "../CSS/MemberBox.css";
import RoundedPicture from "./RoundedPicture";
function Box(props) {
  return (
    <div className="MemberBox">
      <RoundedPicture
        image={require(`../assets/${props.pic}`)}
        person={props.Name}
      />
      <h1 className="MemberNameText">{props.Name}</h1>
      <h3 className="MemberPositionText">{props.Position}</h3>
    </div>
  );
}
export default Box;
