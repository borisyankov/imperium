import { Card, Nation, StartingLocation, Icon, RegionType, Suit } from '../../types';

const galliaAquitania: Card = {
  cardName: 'Gallia Aquitania',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: 'You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.ROMANS,
  cardNumber: '1ROM11/23',
  startingLocation: StartingLocation.NATION,
};

export default galliaAquitania;