import { useState } from "react";
import Cards from "./components/Cards";
import Score from "./components/Score";
import Restart from "./components/Restart";

export default function App() {
  const [score, setScore] = useState(10);
  const [bestScore, setBestScore] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winGame, setWinGame] = useState(false);
  return (
    <div className="bg-[#373737] min-h-screen">
      <Score score={score} bestScore={bestScore} setWinGame={setWinGame} />
      {!isGameOver && !winGame ? (
        <div className="grid grid-cols-4 gap-7 p-9">
          <Cards
            score={score}
            setScore={setScore}
            setIsGameOver={setIsGameOver}
            bestScore={bestScore}
            setBestScore={setBestScore}
          />
        </div>
      ) : isGameOver && !winGame ? (
        <>
          <Restart
            score={score}
            setScore={setScore}
            setGameOver={setIsGameOver}
            bestScore={bestScore}
            setBestScore={setBestScore}
          />
        </>
      ) : !isGameOver && winGame ? (
        <>
          <h1>Winner</h1>
        </>
      ) : null}
    </div>
  );
}
