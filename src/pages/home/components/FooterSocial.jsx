import React from "react";
import { Link } from "react-router-dom";
import "./FooterSocial.css";

function FooterSocial({ Icon, text, link }) {
  return (
    <Link to={link} className="social__link" target="_blank">
      <Icon className="social__icon" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {text.split("\n").map((t) => (
          <p className="social__text">{t}</p>
        ))}
      </div>
    </Link>
  );
}

export default FooterSocial;
