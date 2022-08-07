import { Card, Icon, Nation, Suit } from '../../types';
import * as E from '../../effects';

const orestis: Card = {
  cardName: 'Orestis',
  icon: Icon.PINNED,
  effect: [E.GAIN({ materials: 2 }), E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC19/23',
};

export default orestis;