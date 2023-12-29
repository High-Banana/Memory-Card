/* eslint-disable react/prop-types */
export default function Restart({ score, setScore, setGameOver, bestScore }) {
  function restartGame() {
    setScore(0);
    setGameOver(false);
  }
  return (
    <>
      <h1>Game over!</h1>
      <h1>Your score: {score}</h1>
      <h1>Your best score: {Math.max(...bestScore)}</h1>
      <button onClick={restartGame}>Restart</button>
    </>
  );
}
