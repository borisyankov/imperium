import { Card, Nation, RegionType, StartingLocation, Icon, Suit } from '../../types';

const arachosia: Card = {
  cardName: 'Arachosia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'You MAY put a card from your discard pile into your history. You MAY garrison a card.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER10/23',
  startingLocation: StartingLocation.NATION,
  suit: Suit.REGION,
};

export default arachosia;