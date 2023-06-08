import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
import DelayedLink from "../../../components/DelayedLink";

function Button({ text, type, link, target, delayed, delay, ...props }) {
  let variation = "";
  if (type === 1) {
    variation = "yellow";
  } else if (type === 2) {
    variation = "green";
  }

  if (delayed) {
    return (
      <DelayedLink
        className={`home-page__button ${variation}`}
        to={link || "/"}
        target={target || "_self"}
        delay={delay}
        {...props}
      >
        {text}
      </DelayedLink>
    );
  }

  return (
    <Link
      className={`home-page__button ${variation}`}
      to={link || "/"}
      target={target || "_self"}
      {...props}
    >
      {text}
    </Link>
  );
}

export default Button;
