import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ text, type, link, target }) {
  let variation = "";
  if (type === 1) {
    variation = "yellow";
  } else if (type === 2) {
    variation = "green";
  }

  return (
    <Link
      className={`home-page__button ${variation}`}
      to={link || "/"}
      target={target || "_self"}
    >
      {text}
    </Link>
  );
}

export default Button;
