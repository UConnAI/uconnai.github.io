import "./CSS/App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate as Redirect,
} from "react-router-dom";
import HomePage from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import JoinPage from "./pages/JoinPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/TeamPage" element={<TeamPage />} />
          <Route path="/JoinPage" element={<JoinPage />} />
          <Route path="/404" element={<NotFound />} />
        </Route>
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
