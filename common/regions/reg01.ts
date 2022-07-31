import { Card, Icon, Suit } from '../../types';
import * as E from '../../effects';

const wilderness: Card = {
  cardName: 'Wilderness',
  icon: Icon.PINNED,
  effect: [E.EXILE_FROM_MARKET, E.GARRISON, 'Passive: you MAY recall this card to avoid the effect of an {attack}.'],
  suit: Suit.REGION,
  playerCount: 3,
  cardNumber: '1REG1/14',
  vp: 1,
};

export default wilderness;