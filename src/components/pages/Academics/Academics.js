import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function Academics() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </Router>
    </div>
  );
}
