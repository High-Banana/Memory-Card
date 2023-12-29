export default function Restart({ gameOver, setGameOver }) {
  return (
    <>
      <h1>Restart</h1>
      <button onClick={() => setGameOver(false)}>Restart</button>
    </>
  );
}
