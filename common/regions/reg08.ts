import { Card, Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const hills: Card = {
  cardName: 'Hills',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: [E.GAIN_1_P, E.EXILE_FROM_MARKET, E.GARRISON],
  suit: Suit.REGION, 
  cardNumber: '1REG8/14',
}

export default hills;