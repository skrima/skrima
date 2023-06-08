import React, { useState, useEffect } from "react";
import "../styles/Overlay.css";

function Overlay() {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPointerPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="circular-pointer"
      style={{ left: pointerPosition.x, top: pointerPosition.y }}
    ></div>
  );
}

export default Overlay;
