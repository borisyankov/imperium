import { Card, Icon, Nation, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const forestOfPholoe: Card = {
  cardName: 'Forest of Pholoe',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: E.GARRISON,
  suit: Suit.REGION,
  nation: Nation.GREEKS,
  cardNumber: '1GRE21/23',
};

export default forestOfPholoe;