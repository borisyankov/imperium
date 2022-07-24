import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';

const tarimBasin: Card = {
  cardName: 'Tarim Basin',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'You MAY draw a card. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY11/24',
  startingLocation: StartingLocation.NATION,
};

export default tarimBasin;