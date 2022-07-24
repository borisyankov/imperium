import { Card, Suit, Nation } from '../../types';

const scythians: Card = {
  cardName: 'Scythians',
  effect: 'Exhaust: spend an action and take {unrest} to break through for {region}.',
  suit: Suit.POWER,
  cardNumber: '1SCY1A/24',
  nation: Nation.SCYTHIANS,
  vp: '1 VP per 6 {materials}',
};

export default scythians;