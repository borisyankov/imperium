import { Card, Icon, Suit } from '../../types';
import * as E from '../../effects';

const jungle: Card = {
  cardName: 'Jungle',
  icon: Icon.PINNED,
  effect: [E.GAIN_1_P, E.EXILE_FROM_MARKET, E.GARRISON],
  suit: Suit.REGION,
  cardNumber: '1REG2/14',
  vp: 1,
};

export default jungle;