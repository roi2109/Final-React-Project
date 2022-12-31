import { useEffect } from "react";
import { getAll } from "../services/CardService";
import { useState } from "react";
export function useAllCards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getCards = async () => {
      const { data } = await getAll();
      setCards(data);
    };
    getCards();
  }, []);
  return cards;
}
