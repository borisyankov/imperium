import { Card, Suit } from '../types';

const unrest: Card = {
  cardName: 'Unrest',
  effect: 'Choose: pay 1 {population} OR discard 2 cards OR pay 3 {materials}. If you do, return this card to the unrest pile.',
  suit: Suit.UNREST,
  vp: -2,
};

export default unrest;