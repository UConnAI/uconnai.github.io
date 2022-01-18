import "./CSS/App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate as Redirect,
} from "react-router-dom";
import HomePage from "./Pages/Home";
import TeamPage from "./Pages/TeamPage";
import JoinPage from "./Pages/JoinPage";
import NotFound from "./Pages/NotFound";
import NavagationBar from "./Components/NavigationBar";
import ProjectsPage from "./Pages/ProjectsPage";
import Footer from "./Components/FooterComponent";
function App() {
  return (
    <div className="App">
      <NavagationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TeamPage" element={<TeamPage />} />
        <Route path="/JoinPage" element={<JoinPage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="404" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
