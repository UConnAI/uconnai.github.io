import React from "react";

function RoundedPicture(props) {
    const size = "200";
    let person = props.person;
    let ErrorImage = "Failed to load " + person + "'s image";
    return <img src= {props.image} alt =  {ErrorImage} width = {size} className="RoundedImage"></img>

}

export default RoundedPicture;