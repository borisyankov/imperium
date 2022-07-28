import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';

const plainsOfThessaly: Card = {
  cardName: 'Plains of Thessaly',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: 'Gain 1 {materials}. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.GREEKS,
  cardNumber: '1GRE12/23',
  startingLocation: StartingLocation.NATION,
};

export default plainsOfThessaly;