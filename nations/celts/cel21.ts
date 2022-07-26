import { Card, Icon, Nation, RegionType, Suit } from '../../types';

const celtica: Card = {
  cardName: 'Celtica',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: 'You may place a card of your choice from your discard pile on the top of your deck. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.CELTS,
  cardNumber: '1CEL21/28',
};

export default celtica;