import React from "react";

import Box from "./Box";

function InformationBox (props){
    return (
    <div className="InfoBox">
        <Box Name = {props.Name} Position = {props.Position} />
        <p className="Text"> Year : {props.Year}</p>
        <p className="Text">Major/Minor : {props.MajandMin}</p>
        <p className="Text">{props.AdditionalInfo}</p>
    </div>
    )

}
export default InformationBox;