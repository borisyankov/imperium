import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';

const ponticSteppe: Card = {
  cardName: 'Pontic Steppe',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: 'Gain 1 {population}. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY10/24',
  startingLocation: StartingLocation.NATION,
};

export default ponticSteppe;