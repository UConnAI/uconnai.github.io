import React from "react";
import "../CSS/HomePage.css";
import Box from "../Components/Box";
import TeamPictures from "../Components/TeamPictures";
import AlexMoment from "../assets/Alex-Moment.jpg";
import Calendar from "../Components/Calendar";
const HomePage = (element) => {
  return (
    <div className="home">
      <h1>Welcome to the homepage!</h1>
      <p className="upcomingText">Upcoming Events</p>
      <Calendar />
      <p className="teamText">The Team</p>
      <div className="teamPictures">
        <img className="teamPic" src={AlexMoment} />
        <h1 className="nameImg">Alexander Solod</h1>
      </div>
    </div>
  );
};

export default HomePage;
