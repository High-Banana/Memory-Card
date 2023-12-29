// eslint-disable-next-line react/prop-types
export default function Winner({ setWinGame, setScore }) {
  function restartGame() {
    setScore(0);
    setWinGame(false);
  }
  return (
    <div className="mt-[100px] flex justify-center flex-col gap-[50px] items-center text-center">
      <h1 className="text-5xl text-white">You won!</h1>
      <button
        onClick={restartGame}
        className="m-auto bg-[#e7e7e7] py-2 px-7 text-2xl transition-[.3s] hover:scale-[1.04] font-semibold rounded-md"
      >
        Play again
      </button>
    </div>
  );
}
