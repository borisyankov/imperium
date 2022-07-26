import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';

const britannia: Card = {
  cardName: 'Britannia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: 'You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.CELTS,
  cardNumber: '1CEL11/28',
  startingLocation: StartingLocation.NATION,
};

export default britannia;