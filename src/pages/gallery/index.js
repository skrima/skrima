import React from "react";
import Footer from "./scripts/Footer";
import Grid from "./scripts/Grid";
import "./styles/index.css";

function Gallery() {
  return <div className="nav__sibling gallery-page">
    <Grid />
    <Footer />
  </div>;
}

export default Gallery;
