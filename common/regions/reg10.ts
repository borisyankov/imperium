import { Card,  Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const steppe: Card = {
  cardName: 'Steppe',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.PRODUCTION, RegionType.RIVER],
  effect: [E.EXILE_FROM_MARKET, E.GARRISON],
  suit: Suit.REGION, 
  cardNumber: '1REG10/14',
}

export default steppe;