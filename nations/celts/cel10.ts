import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';

const belgica: Card = {
  cardName: 'Belgica',
  icon: Icon.PINNED,
  regionType: [RegionType.RIVER],
  effect: 'You MAY draw a card. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.CELTS,
  cardNumber: '1CEL10/28',
  startingLocation: StartingLocation.NATION,
};

export default belgica;