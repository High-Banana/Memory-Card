/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

/* eslint-disable react/prop-types */
export default function Score({ score, bestScore, setWonGame }) {
  useEffect(() => {
    if (score >= 12) {
      setWonGame(true);
    }
  }, [score]);
  return (
    <div className="flex flex-col text-white justify-between p-3 items-center gap-4 lg:flex-row">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Memory Card Game</h1>
        <p className="font-semibold md:text-[18px] lg:text-1xl">
          Get points by clicking on the cards but do not click on same card twice
        </p>
      </div>
      <div className="flex justify-between items-center w-[100%] gap-7 lg:w-auto lg:flex-col lg:gap-3">
        <h1 className="text-[1.4rem] font-bold md:text-[2rem]">Score: {score}</h1>
        <h1 className="text-[1.4rem] font-bold md:text-[2rem]">Best score: {Math.max(...bestScore)}</h1>
      </div>
    </div>
  );
}
