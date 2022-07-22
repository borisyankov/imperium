import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';

const iberia: Card = {
  cardName: 'Iberia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: 'You MAY garrison a card.',
  nation: Nation.CARTHAGINIANS,
  startingLocation: StartingLocation.NATION,
  suit: Suit.REGION,
  cardNumber: '1CAR12/23',
};

export default iberia;