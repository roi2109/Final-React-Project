import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useAllCards } from "../hooks/useAllCards";

const CardMyCards = () => {
  const cards = useAllCards();
  console.log(cards);
  return (
    <div>
      <Link to="/create-card">Create a New Card</Link>
      {!cards.length ? (
        <h2>No Cards To Show...</h2>
      ) : (
        cards.map((card, index) => <Card key={index} card={card} />)
      )}
    </div>
  );
};

export default CardMyCards;
