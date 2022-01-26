import React from "react";
import "../CSS/HomePage.css";
import Box from "../Components/Box";
import InformationBox from "../Components/InformationBox";
import TeamPictures from "../Components/TeamPictures";
import AlexMoment from "../assets/Alex-Moment.jpg";
import Calendar from "../Components/Calendar";
const HomePage = (element) => {
  const items = parse_elements();
  return (
    <div className="home">
      <h1>Welcome to the homepage!</h1>
      <p className="upcomingText">Upcoming Events</p>
      <Calendar />
      <h1 className="teamText">The Team</h1>
      <div className="Members">{items}</div>
    </div>
  );
};
const parse_elements = () => {
  const data = require("../eboard.json");
  const members = [];
  for (const key in data) {
    for (const a in data[key]) {
      const current = data[key][a];
      members.push(
        <TeamPictures
          key={current["name"]}
          Name={current["name"]}
          style="Box"
          pic={current["pic-path"]}
        />
      );
    }
  }
  return members;
};
export default HomePage;
