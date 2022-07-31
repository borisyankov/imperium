import { Card, Icon, Nation, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const celtica: Card = {
  cardName: 'Celtica',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: [E.FROM_DISCARD_TO_DECK, E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.CELTS,
  cardNumber: '1CEL21/28',
};

export default celtica;