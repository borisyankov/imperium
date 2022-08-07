import { Card, Nation, Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const dalmatia: Card = {
  cardName: 'Dalmatia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: [E.GAIN({ population: 1 }), E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.ROMANS,
  cardNumber: '1ROM20/23',
};

export default dalmatia;