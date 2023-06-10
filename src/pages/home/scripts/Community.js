import React, { useState } from "react";
import "../styles/index.css";
import communityImage from "../assets/images/community-image.png";
import SvgLinesLeft from "../assets/LinesLeft";
import SvgLinesRight from "../assets/LinesRight";
import Button from "../components/Button";
import useWindowSize from "react-use/lib/useWindowSize";
import MyConfetti from "../components/MyConfetti";

function Community() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  return (
    <section className="community-section">
      {showConfetti && <MyConfetti />}
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
          delayed
          delay={2000}
          setShowConfetti={setShowConfetti}
        />
      </div>
    </section>
  );
}

export default Community;
