import { useState, useEffect } from "react";

export default function Cards() {
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState(null);
  useEffect(() => {
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
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
      console.log(error);
      return;
    }
  }

  useEffect(() => {
    if (deckId !== null && deckId !== undefined) drawCards(deckId);
  }, [deckId]);

  if (!cards) {
    return <h1>Loading</h1>;
  } else
    return (
      <>
        {cards.map((card) => {
          return (
            <img
              key={card.code}
              src={card.image}
              alt={`${card.value} of ${card.suit}`}
              className="hover:scale-[1.03] transition-[0.3s] shadow-[0_4px_8px_0_rgb(0,0,0,0.2)] rounded-lg bg-transparent"
            ></img>
          );
        })}
      </>
    );
}
