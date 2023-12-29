import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Score({ score, gameOver }) {
  const [bestScore, setBestScore] = useState([]);
  if (gameOver) {
    setBestScore([...bestScore, score]);
  }
  return (
    <>
      <h1>Score: {score}</h1>;
    </>
  );
}
