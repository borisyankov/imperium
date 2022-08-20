import { Card } from "../types";

export const shuffle = <T>(deck: T[]): T[] => {
  const shuffled = [...deck];
  for (let i = 0; i < shuffled.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
};

export const filterCards = (cards: Card[], playerCount: number): Card[] => 
  cards.filter(card => !card.playerCount || card.playerCount < playerCount);

export const takeCards = (cards: Card[], count: number): Card[] => {
  const takenCards: Card[] = [];
  for (let i = 0; i < count; i++) {
    if (cards.length === 0) {
      break;
    }
    takenCards.push(cards.pop() as Card);
  }
  return takenCards;
}

export const drawCardWithUnrest = (cards: Card[], unrest: Card[]): Card[] => {
  // check if cards is empty
  // check if unsrest is empty
  return [cards.pop() as Card, unrest.pop() as Card];
}
