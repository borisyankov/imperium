import { Card, Icon, Nation, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const balearicIslands: Card = {
  cardName: 'Balearic Islands',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.PRODUCTION, RegionType.RIVER],
  effect: E.GARRISON,
  nation: Nation.CARTHAGINIANS,
  suit: Suit.REGION,
  cardNumber: '1CAR20/23',
};

export default balearicIslands;