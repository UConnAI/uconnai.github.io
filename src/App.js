import "./CSS/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import TeamPage from "./Pages/TeamPage";
import JoinPage from "./Pages/JoinPage";
import NotFound from "./Pages/NotFound";
import NavagationBar from "./Components/NavigationBar";
import ProjectsPage from "./Pages/ProjectsPage";
import TutPage from "./Pages/TutorialPage";

function App() {
  return (
    <div style={{ marginTop: "10rem", textAlign: "center" }}>
      <head>
        <title>UConn AI</title>
      </head>
      <NavagationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TeamPage" element={<TeamPage />} />
        <Route path="/JoinPage" element={<JoinPage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="/TutorialPage" element={<TutPage />} />
        <Route path="404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
