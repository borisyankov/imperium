import { Card, Suit, Nation } from '../../types';

const macedonians: Card = {
  cardName: 'Macedonians',
  effect: 'Passive: when you play a {region} from your discard pile, gain 2 {materials}.',
  suit: Suit.POWER,
  cardNumber: '1MAC1A/23',
  nation: Nation.MACEDONIANS,
  vp: '1 VP per 2 {region}',
};

export default macedonians;