import React from "react";
import TestPicture from "../image0.jpg";
import "../CSS/MemberBox.css";
function Tutorial() {
    return (
    <div className="TutorialBox">
          <div>
              <img 
                src = {TestPicture} 
                alt = {TestPicture}
                width = "536"
                height= "402" 
                className="TutorialPicture"
              ></img>

          </div>
          <h1 className="TutorialText">People Who look Nice</h1>
          <h3 className="TutorialText2">Only 1.. Kim Jisoo</h3>
          {/* If we ever wanna change anything defined it with classNames for that */}
    </div>
    );
}
  export default Tutorial;
