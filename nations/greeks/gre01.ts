import { Card, Suit, Nation, StartingLocation } from '../../types';

const greeks: Card = {
  cardName: 'Greeks',
  effect: 'Exhaust: spend 2 actions to break through for {uncivilised} / {civilised}.',
  suit: Suit.POWER,
  cardNumber: '1GRE1A/23',
  startingLocation: StartingLocation.IN_PLAY,
  nation: Nation.GREEKS,
  vp: '1 VP per 7 cards',
};

export default greeks;