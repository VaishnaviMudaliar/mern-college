import React from "react";
import "./home.css";
import topper1 from "../../assets/download.jpg";
export default function Home() {
  return (
    <div className="home">
      <h1 className="heading">OUR TOPPERS</h1>
      <div className="topper">
        <div>
          <img className="topper_image" src={topper1} alt="" />
          <h5 className="topper_name">topper1</h5>
        </div>
        <div>
          <img className="topper_image" src={topper1} alt="" />
          <h5 className="topper_name">topper1</h5>
        </div>
        <div>
          <img className="topper_image" src={topper1} alt="" />
          <h5 className="topper_name">topper1</h5>
        </div>
        <div>
          <img className="topper_image" src={topper1} alt="" />
          <h5 className="topper_name">topper1</h5>
        </div>
        <div>
          <img className="topper_image" src={topper1} alt="" />
          <h5 className="topper_name">topper1</h5>
        </div>
      </div>
    </div>
  );
}
