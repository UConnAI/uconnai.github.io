import React from "react";

import InformationBox from "../Components/InformationBox";
import "../CSS/MemberBox.css";

function TeamPage() {
  const memberbox = parse_elements();
  return (
    <div>
      <h1 style={{ fontWeight: "normal" }}>The Team</h1>
      <div className="Members">{memberbox}</div>
    </div>
  );
}
export default TeamPage;

const parse_elements = () => {
  const data = require("../eboard.json");
  const members = [];
  for (const key in data) {
    for (const a in data[key]) {
      const current = data[key][a];
      let majnmin = current["major"].join(", ");
      if (current["minor"] != "") {
        majnmin += "/" + current["minor"].join(", ");
      }
      members.push(
        <InformationBox
          key={current["name"]}
          Name={current["name"]}
          Position={key}
          Year={current["grad-year"]}
          MajandMin={majnmin}
          AdditionalInfo={current["bio"]}
          pic={current["pic-path"]}
        />
      );
    }
  }
  return members;
};
