import React from "react";
import "../CSS/TutorialVideo.css";

const TutPage = () => {
  return (
    <div className="tutorials">
      <div>
        <iframe
          className="video1"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Mv_vI-gOCQc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>Introduction to Machine learning</h2>
        <p className="videoDescription">
          Good video to watch if you are starting out for machine learning.
        </p>
        <p>Made by our past president Ethan Rathbun.</p>
      </div>
    </div>
  );
};

export default TutPage;
