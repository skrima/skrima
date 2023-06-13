import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { socials } from "../data/footer-data";
import FooterSocial from "../components/FooterSocial";
import "../styles/index.css";
import Legal from "../../../components/Legal";

function Footer() {
  const videoId = "K4TOrB7at0Y";
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
    origin: "https://skrima.com",
  };

  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-main__left">
          <div className="text-container">
            <h2>Our History</h2>
            <p>
              SKRIMA originated as a social media app project led by a group of
              passionate individuals. However, recognizing the potential to make
              a broader impact, we transformed into a community-driven
              initiative dedicated to empowering young talents in technology.
              <br />
              <br />
              Through guidance, training, and outreach programs, we help young
              individuals discover their strengths and develop essential skills
              for success in the ever-evolving tech landscape. Our focus extends
              beyond personal growth to contribute to the advancement of the
              Nigerian and global economy by fostering a skilled workforce and
              driving innovation.
              <br />
              <br />
              SKRIMA is proud of our journey and the positive influence we
              continue to have. Join us as we shape the future of technology and
              empower the next generation of tech leaders. Together, we can make
              a lasting difference.
            </p>
          </div>
        </div>
        <div className="footer-main__right">
          <div className="video-container">
            <YouTube videoId={videoId} opts={opts} />
          </div>
        </div>
      </div>
      <div className="footer-socials">
        {socials.map((social, index) => {
          return <FooterSocial key={index} {...social} />;
        })}
      </div>
      <Legal />
    </footer>
  );
}

export default Footer;
