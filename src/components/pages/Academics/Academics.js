import React from "react";
import Navbar from "./Navbar";
import "./Academics.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import AcademicCalendars from "./pages/Academic_calendars";
import Accredition from "./pages/Accredition";

export default function Academics() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/academic_calendars" element={<AcademicCalendars />} />
          <Route path="/accredition" element={<Accredition />} />
        </Routes>
      </Router>
    </div>
  );
}
