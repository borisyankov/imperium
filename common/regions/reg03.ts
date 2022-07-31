import { Card, Icon, Suit } from '../../types';
import * as E from '../../effects';

const mountain: Card = {
  cardName: 'Mountain',
  icon: Icon.PINNED,
  effect: [E.GAIN_3_M, E.EXILE_FROM_MARKET, E.GARRISON],
  suit: Suit.REGION, 
  cardNumber: '1REG3/14',
  vp: 1,
}

export default mountain;