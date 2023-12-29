/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Loading from "./Loading";
import GameLogic from "./GameLogic";
const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

export default function Cards({ score, setScore, setIsGameOver, bestScore, setBestScore }) {
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState(null);
  const [cardCode, setCardCode] = useState([]);

  useEffect(() => {
    async function getDeckId() {
      const response = await fetch(url);
      const data = await response.json();
      setDeckId(data.deck_id);
    }
    getDeckId();
  }, []);

  async function drawCards(deckId) {
    try {
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=12`);
      const data = await response.json();
      setCards(data.cards);
    } catch (error) {
      return console.log(error);
    }
  }

  useEffect(() => {
    if (deckId !== null && deckId !== undefined) drawCards(deckId);
  }, [deckId]);

  <GameLogic />;

  function gameLogic(code) {
    if (!cardCode.includes(code)) {
      setScore(score + 1);
      setBestScore([...bestScore, score + 1]);
      setCardCode([...cardCode, code]);
    } else {
      setIsGameOver(true);
      setCardCode([]);
    }
  }

  function shuffleCards(code) {
    gameLogic(code);
    if (cards !== null) cards.sort(() => Math.random() - 0.5);
  }

  if (!cards) {
    return <Loading />;
  } else
    return (
      <div className="grid grid-cols-4 gap-7 p-9">
        {cards.map((card) => {
          return (
            <img
              onClick={() => shuffleCards(card.code)}
              key={card.code}
              src={card.image}
              alt={`${card.value} of ${card.suit}`}
              className="hover:scale-[1.03] transition-[0.3s] shadow-[0_4px_8px_0_rgb(0,0,0,0.2)] rounded-lg bg-transparent"
            ></img>
          );
        })}
      </div>
    );
}
