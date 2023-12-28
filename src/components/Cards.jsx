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
      console.log(data);
      setCards(data.cards);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  useEffect(() => {
    if (deckId !== null && deckId !== undefined) drawCards(deckId);
  }, [deckId]);
  return (
    <>
      <h1>Cards</h1>
      {cards.map((card) => {
        return <img key={card.code} src={card.image} alt={`${card.value} of ${card.suit}`}></img>;
      })}
    </>
  );
}
