import React from "react";
import "../styles/index.css";
import communityImage from "../assets/community-image.png";
import SvgLinesLeft from "../assets/LinesLeft";
import SvgLinesRight from "../assets/LinesRight";
import Button from "../components/Button";

function Community() {
  return (
    <section className="community-section">
      <img src={communityImage} className="community-image" />
      <div className="community-title">
        <SvgLinesLeft className="community-title__svg" />
        <h2 className="community-title__text">Community</h2>
        <SvgLinesRight className="community-title__svg right" />
      </div>
      <div className="community-cta__container">
        <Button
          text={"Join our Community!"}
          link={"https://chat.whatsapp.com/G5lh0pkN0nHKdehW0H3Skp"}
          target={"_blank"}
        />
      </div>
    </section>
  );
}

export default Community;
