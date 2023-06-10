import React from "react";
import Confetti from "react-confetti";

export default ({ width, height, ...props }) => {
  return (
    <Confetti
      width={width}
      height={height}
      gravity={0.5}
      numberOfPieces={500}
      wind={0.01}
      friction={0.99}
      initialVelocityY={10}
      colors={[
        "#000000",
        "#ffffff",
        "#00ff80",
        "#ffff00",
        "#ffffff",
        "#fafafa",
      ]}
      angle={45}
      {...props}
    />
  );
};
