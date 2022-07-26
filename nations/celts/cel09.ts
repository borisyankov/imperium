import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';

const armorica: Card = {
  cardName: 'Armorica',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.CELTS,
  cardNumber: '1CEL9/28',
  startingLocation: StartingLocation.NATION,
};

export default armorica;