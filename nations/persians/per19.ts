import { Card, Nation, Suit, Icon } from '../../types';
import * as E from '../../effects';

const bactria: Card = {
  cardName: 'Bactria',
  icon: Icon.PINNED,
  effect: [E.GAIN_3_M, E.GARRISON],
  nation: Nation.PERSIANS,
  cardNumber: '1PER19/23',
  suit: Suit.REGION,
};

export default bactria;