import React from "react";
import Jisoo from "../image0.jpg";

function LeftProjectTitle() {
  return (
    <div className="LeftProject">
      <div>
        <img src={Jisoo} alt={Jisoo} className="ProjectLeftPic"></img>
      </div>
      <div className="ProjectText">
        <p>
          She is the most beautiful person in this whole universe/multiverse.
        </p>
      </div>
    </div>
  );
}

export default LeftProjectTitle;
