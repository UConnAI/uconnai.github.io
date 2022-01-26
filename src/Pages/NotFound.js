import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h2>404: Page Not Found!</h2>
        <p>Please Click One of the Links Below:</p>
        <ul id="go-back">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/TeamPage">TeamPage</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/JoinPage">JoinPage</Link>{" "}
          </li>
        </ul>
      </div>
    );
  }
}

export default NotFound;
