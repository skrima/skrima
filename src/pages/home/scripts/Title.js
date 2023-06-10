import React from "react";
import titleImage from "../assets/images/title_image.png";

function Title() {
  return (
    <section className="title-section">
      <h1 className="title-section__title">
        Sustainable Knowledge for Rapid Innovations and Modern Applications
      </h1>
      <p className="title-section__text">
        We are dedicated to empowering the next generation in information
        technology. We offer innovative solutions in website development,
        automation, design, branding, social media management, and AI.
        Additionally, we assist schools and individuals in registering for
        international exams. Join us as we shape the future of IT together.
      </p>
      <img src={titleImage} className="title-section__img" alt="" />
    </section>
  );
}

export default Title;
