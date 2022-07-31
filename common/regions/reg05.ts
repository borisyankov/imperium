import { Card, Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const floodplain: Card = {
  cardName: 'Floodplain',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: [E.DISCARD_TO_HISTORY, E.EXILE_FROM_MARKET, E.GARRISON],
  suit: Suit.REGION, 
  cardNumber: '1REG5/14',
}

export default floodplain;