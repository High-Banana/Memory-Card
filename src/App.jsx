import { useState } from "react";
import Cards from "./components/Cards";
import Score from "./components/Score";
import Restart from "./components/Restart";

export default function App() {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  if (!isGameOver) {
    return (
      <div className="bg-[#373737] min-h-screen">
        <Score score={score} gameOver={isGameOver} />
        <div className="grid grid-cols-4 gap-7 p-9">
          <Cards score={score} setScore={setScore} setIsGameOver={setIsGameOver} />
        </div>
      </div>
    );
  } else return <Restart gameOver={isGameOver} setGameOver={setIsGameOver} />;
}
