import { Card, Nation, Icon, RegionType, Suit } from '../../types';

const dalmatia: Card = {
  cardName: 'Dalmatia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: 'Gain 1 {population}. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.ROMANS,
  cardNumber: '1ROM20/23',
};

export default dalmatia;