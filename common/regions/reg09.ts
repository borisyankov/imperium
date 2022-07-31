import { Card,  Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const marsh: Card = {
  cardName: 'Marsh',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: [E.GAIN_2_M, E.EXILE_FROM_MARKET, E.GARRISON],
  suit: Suit.REGION, 
  cardNumber: '1REG9/14',
}

export default marsh;