import React from "react";
import Main from "./scripts/Main";
import Footer from "./scripts/Footer";
import "./styles/index.css";

function Company() {
  return <div className="nav__sibling company-page">
    <Main />
    <Footer />
  </div>;
}

export default Company;
