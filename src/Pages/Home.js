import React from "react";
import "../CSS/HomePage.css";
import TeamPictures from "../Components/TeamPictures";
import Calendar from "../Components/Calendar";



const HomePage = () => {
  const items = parse_elements();
  return (
    <div className="home">

      {/* <h1 style={{ fontSize: "10rem" }}>UConn AI</h1> */}
      <p className="upcomingText">Upcoming Events</p>
      <Calendar />
      <h2 className="teamText">The Team</h2>
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
          pic={current["pic-path"]}
          position={current["position"]}
        />,
      );
    }
  }
  return members;
};
export default HomePage;
