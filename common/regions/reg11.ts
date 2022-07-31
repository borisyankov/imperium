import { Card,  Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const river: Card = {
  cardName: 'River',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.PRODUCTION, RegionType.RIVER],
  effect: [E.DISCARD_TO_HISTORY, E.EXILE_FROM_MARKET, E.GARRISON],
  suit: Suit.REGION, 
  cardNumber: '1REG11/14',
}

export default river;