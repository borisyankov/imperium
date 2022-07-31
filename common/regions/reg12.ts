import { Card, Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const cape: Card = {
  cardName: 'Cape',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: [E.EXILE_FROM_MARKET, E.GARRISON, 'Passive: you MAY recall this to avoid the effect of an {attack}.'],
  suit: Suit.REGION, 
  cardNumber: '1REG12/14',
}

export default cape;