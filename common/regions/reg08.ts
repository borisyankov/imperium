import { Card, Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const hills: Card = {
  cardName: 'Hills',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: [E.GAIN({ population: 1 }), E.EXILE_FROM_MARKET, E.GARRISON],
  suit: Suit.REGION, 
  cardNumber: '1REG8/14',
}

export default hills;