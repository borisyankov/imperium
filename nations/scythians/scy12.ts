import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';

const caucasia: Card = {
  cardName: 'Caucasia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: 'Gain 1 {population}. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY12/24',
  startingLocation: StartingLocation.NATION,
};

export default caucasia;