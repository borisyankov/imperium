import { Card, Icon, Nation, RegionType, Suit } from '../../types';

const haliacmonValley: Card = {
  cardName: 'Haliacmon Valley',
  icon: Icon.PINNED,
  regionType: [RegionType.FERTILE, RegionType.RIVER],
  effect: 'Gain 1 {population}. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC18/23',
};

export default haliacmonValley;