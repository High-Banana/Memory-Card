import Cards from "./components/Cards";
import Score from "./components/Score";

export default function App() {
  return (
    <div className="bg-[#373737]">
      <Score />
      <div className="grid grid-cols-4 gap-7 p-9">
        <Cards />
      </div>
    </div>
  );
}
