import React from "react";
import Title from "./scripts/Title";
import Overview from "./scripts/Overview";
import Services from "./scripts/Services";
import Community from "./scripts/Community";
import Mission from "./scripts/Mission";
import Footer from "./scripts/Footer";
import "./styles/index.css";
import Overlay from "./scripts/Overlay";

function Home() {
  return (
    <div className="nav__sibling home-page">
      <Overlay />
      <Title />
      <Overview />
      <Services />
      <Community />
      <Mission />
      <Footer />
    </div>
  );
}

export default Home;
