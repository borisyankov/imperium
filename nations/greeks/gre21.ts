import { Card, Icon, Nation, RegionType, Suit } from '../../types';

const forestOfPholoe: Card = {
  cardName: 'Forest of Pholoe',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: 'You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.GREEKS,
  cardNumber: '1GRE21/23',
};

export default forestOfPholoe;