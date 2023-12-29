import { useState } from "react";
import Cards from "./components/Cards";
import Score from "./components/Score";
import Restart from "./components/Restart";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState([0]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [wonGame, setWonGame] = useState(true);
  return (
    <div className="bg-[#373737] min-h-screen">
      <Score score={score} bestScore={bestScore} setWonGame={setWonGame} />
      {!isGameOver && !wonGame ? (
        <Cards
          score={score}
          setScore={setScore}
          setIsGameOver={setIsGameOver}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      ) : isGameOver || wonGame ? (
        <Restart
          score={score}
          setScore={setScore}
          setGameOver={setIsGameOver}
          bestScore={bestScore}
          setWonGame={setWonGame}
          lostGame={isGameOver}
          wonGame={wonGame}
        />
      ) : null}
    </div>
  );
}
