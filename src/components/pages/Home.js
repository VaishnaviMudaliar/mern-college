import "./home.css";

import React from "react";

import image1 from "../assets/images/pdea1.png";

import image3 from "../assets/images/pdea3.png";
export default function Home() {
  const myStyle = {
    backgroundImage: `url(${image1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  };

  return (
    <div style={myStyle}>
      <div></div>
      <section class="header">
        <nav>
          <a href="index.html">
            <img src={image3} alt="logo" />
          </a>
          <div className="nav-links" id="navLinks">
            <i className="fas fa-times" onclick="hideMenu()"></i>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">ABOUT</a>
              </li>
              <li>
                <a href="/">COURSE</a>
              </li>
              <li>
                <a href="/">BLOG</a>
              </li>
              <li>
                <a href="/">CONTACT</a>
              </li>
            </ul>
          </div>
          <i className="fas fa-bars" onclick="showMenu()"></i>
        </nav>
        <div className="text-box">
          <h1>Pune District Education Association's</h1>
          <h1>College of Engineering</h1>
          <h2>Manjari(BK) , Hadapsar Pune</h2>
          <br />
          <a href="/" className="hero-btn">
            Visit Us To Know More
          </a>
        </div>
      </section>
    </div>
  );
}
