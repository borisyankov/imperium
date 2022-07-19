import { Card, Suit, Nation } from '../../types';

const persians: Card = {
  cardName: 'Persians',
  effect: 'Exhaust: spend an action, place 2 cards on the top of your deck, and pay 1 {population} to break through for {tributary}.',
  suit: Suit.POWER, 
  cardNumber: '1PER1A/23',
  nation: Nation.PERSIANS,
  vp: '1 VP per 3 {tributary}',
};

export default persians;