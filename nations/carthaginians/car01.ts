import { Card, Suit, Nation, StartingLocation } from '../../types';

const carthaginians: Card = {
  cardName: 'Carthaginians',
  effect: 'Passive: when you would place a {progress} on a card in the market, instead place a {materials} on that card. Exhaust: when you gain a card from the market with {materials} on it, double the {materials} gained.',
  suit: Suit.POWER,
  cardNumber: '1CAR1A/23',
  startingLocation: StartingLocation.IN_PLAY,
  nation: Nation.CARTHAGINIANS,
  vp: '1 VP per 6 {materials}',
};

export default carthaginians;