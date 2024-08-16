import React from "react";
import Button from "../components/Button";
import missionImage from "../assets/images/mission-image.png";
import "../styles/index.css";

function Mission() {
  return (
    <section className="mission-section">
      <img src={missionImage} className="mission-image" />
      <div className="mission-content">
        <div className="mission-title">
          <h2 className="mission-title__text">Our Mission</h2>
        </div>
        <div className="mission-description">
          <p className="mission-description__text">
            “ To empower individuals, businesses, and educational institutions
            with innovative IT solutions and personalized guidance, fostering
            growth, success, and digital transformation in the ever-evolving
            landscape of information technology ”
          </p>
        </div>
        <div className="mission-cta__container">
          {/* <Button text={"Support our Mission"} type={2} /> */}
        </div>
      </div>
    </section>
  );
}

export default Mission;
