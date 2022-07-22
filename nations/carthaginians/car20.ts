import { Card, Icon, Nation, RegionType, Suit } from '../../types';

const balearicIslands: Card = {
  cardName: 'Balearic Islands',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'You MAY garrison a card.',
  nation: Nation.CARTHAGINIANS,
  suit: Suit.REGION,
  cardNumber: '1CAR20/23',
};

export default balearicIslands;