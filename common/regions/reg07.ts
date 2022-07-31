import { Card, Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const oasis: Card = {
  cardName: 'Oasis',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.PRODUCTION, RegionType.RIVER],
  effect: [E.EXILE_FROM_MARKET, E.GARRISON],
  suit: Suit.REGION, 
  cardNumber: '1REG7/14',
}

export default oasis;