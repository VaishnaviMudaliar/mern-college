import React from "react";
import "./syllabus.css";
import computer from "../../assets/computer.jpg";
import mechanical from "../../assets/mechanical.jpg";
import civil from "../../assets/civil.jpg";

export default function Syllabus() {
  return (
    <div>
      <h1>Syllabus</h1>
      <h1 className="heading"> Please Choose The Department</h1>
      <div className="row">
        <div className="campus-col">
          <img src={computer} alt="" />
          <div className="layer">
            <h3>Computer Engineering</h3>
          </div>
        </div>

        <div className="campus-col">
          <img src={mechanical} alt="" />
          <div class="layer">
            <h3>Mechanical Engineering</h3>
          </div>
        </div>

        <div class="campus-col">
          <img src={civil} alt="" />
          <div className="layer">
            <h3>Civil Engineering </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
