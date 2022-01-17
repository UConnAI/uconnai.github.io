import React from "react";
import "../CSS/MemberBox.css";
import Box from "./Box";

function InformationBox(props) {
  return (
    <div className="InfoBox">
      <Box Name={props.Name} Position={props.Position} />
      <div className="Text">
        <p> Year : {props.Year}</p>
        <p>Major/Minor : {props.MajandMin}</p>
        <p>{props.AdditionalInfo}</p>
      </div>
      
    </div>
  );
}
export default InformationBox;
