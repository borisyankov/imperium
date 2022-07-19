import { Card, Suit, Nation } from '../../types';

const romans: Card = {
  cardName: 'Romans',
  effect: 'Passive: whenever you look at any number of cards from the {fame} deck, look at one additional card, then gain 1 {progress}.',
  suit: Suit.POWER, 
  cardNumber: '1ROM1A/23',
  nation: Nation.ROMANS,
  vp: '1 VP per 4 {population}',
};

export default romans;