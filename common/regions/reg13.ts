import { Card, Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const woodland: Card = {
  cardName: 'Woodland',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: ['You MAY draw a card of your choice from your discard pile and place it on the top of your draw deck.', E.EXILE_FROM_MARKET, E.GARRISON],
  suit: Suit.REGION, 
  cardNumber: '1REG13/14',
}

export default woodland;