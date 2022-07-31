import { Card, Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const coast: Card = {
  cardName: 'Coast',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: [E.DRAW, E.EXILE_FROM_MARKET, E.GARRISON],
  suit: Suit.REGION, 
  cardNumber: '1REG4/14',
}

export default coast;