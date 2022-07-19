import { Card, Nation, StartingLocation, Icon, RegionType, Suit } from '../../types';

const raetia: Card = {
  cardName: 'Raetia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'Gain 1 {materials}. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.ROMANS,
  cardNumber: '1ROM12/23',
  startingLocation: StartingLocation.NATION,
};

export default raetia;