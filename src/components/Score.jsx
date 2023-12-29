import { useEffect } from "react";

/* eslint-disable react/prop-types */
export default function Score({ score, bestScore, setWinGame }) {
  useEffect(() => {
    if (score >= 12) {
      setWinGame(true);
    }
  }, [score]);
  return (
    <div className="flex text-white justify-between p-9 items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold">Memory Card Game</h1>
        <p className="font-semibold">Get points by clicking on the cards but do not click on same card twice</p>
      </div>
      <div className="flex flex-col gap-7">
        <h1 className="text-3xl font-bold">Score: {score}</h1>
        <h1 className="text-[20px] font-bold">Best score: {Math.max(...bestScore)}</h1>
      </div>
    </div>
  );
}
