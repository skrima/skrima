import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const DelayedLink = ({ delay, to, target, ...props }) => {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const clickHandler = (e) => {
    e.preventDefault();
    props.setShowConfetti(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      props.setShowConfetti(false);
      const newTab = window.open(to, target);
      if (newTab) {
        newTab.opener = null;
      } else {
        window.location.replace(to);
        navigate(to);
      }
    }, delay);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <a href={to} target={target} {...props} onClick={clickHandler}>
      {props.children}
    </a>
  );
};

export default DelayedLink;
