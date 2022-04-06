import React from "react";
import Navbar from "./Navbar";
import "./Academics.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Academic_calendars from "./pages/Academic_calendars";
import Accredition from "./pages/Accredition";

export default function Academics() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/academic_calendars" component={Academic_calendars} />
          <Route path="/accredition" component={Accredition} />
        </Routes>
      </Router>
    </div>
  );
}
