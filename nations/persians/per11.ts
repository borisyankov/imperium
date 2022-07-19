import { Card, Nation, RegionType, StartingLocation, Icon, Suit } from '../../types';

const nisaeanPlain: Card = {
  cardName: 'Nisaean Plain',
  icon: Icon.PINNED,
  regionType: [RegionType.FERTILE, RegionType.FERTILE],
  effect: 'You MAY garrison a card.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER11/23',
  startingLocation: StartingLocation.NATION,
  suit: Suit.REGION,
};

export default nisaeanPlain;