/* eslint-disable react/prop-types */
export default function Restart({ score, setScore, setGameOver, bestScore, setWonGame, lostGame, wonGame }) {
  function restartGame() {
    setScore(0);
    setGameOver(false);
    setWonGame(false);
  }
  return (
    <>
      {lostGame ? (
        <div className="flex flex-col justify-center text-center gap-[50px] items-center mt-[50px] md:mt-[40px] lg:mt-[150px]">
          <h1 className="text-5xl text-white font-bold">Game over!</h1>
          <h1 className="text-4xl text-white font-semibold">Your score: {score}</h1>
          <h1 className="text-4xl text-white font-semibold">Your best score: {Math.max(...bestScore)}</h1>
          <button
            onClick={restartGame}
            className="m-auto bg-[#e7e7e7] py-2 px-7 text-2xl transition-[.3s] hover:scale-[1.04] font-semibold rounded-md"
          >
            Restart
          </button>
        </div>
      ) : wonGame ? (
        <div className="mt-[100px] flex justify-center flex-col gap-[50px] items-center text-center">
          <h1 className="text-5xl text-white font-bold">You won!</h1>
          <button
            onClick={restartGame}
            className="m-auto bg-[#e7e7e7] py-2 px-7 text-2xl transition-[.3s] hover:scale-[1.04] font-semibold rounded-md"
          >
            Play again
          </button>
        </div>
      ) : null}
    </>
  );
}
