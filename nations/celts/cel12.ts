import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';

const hibernia: Card = {
  cardName: 'Hibernia',
  icon: Icon.PINNED,
  regionType: [RegionType.FERTILE],
  effect: 'You MAY draw a card from your discard pile. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.CELTS,
  cardNumber: '1CEL12/28',
  startingLocation: StartingLocation.NATION,
};

export default hibernia;