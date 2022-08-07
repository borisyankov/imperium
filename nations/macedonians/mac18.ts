import { Card, Icon, Nation, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const haliacmonValley: Card = {
  cardName: 'Haliacmon Valley',
  icon: Icon.PINNED,
  regionType: [RegionType.FERTILE, RegionType.RIVER],
  effect: [E.GAIN({ population: 1 }), E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC18/23',
};

export default haliacmonValley;