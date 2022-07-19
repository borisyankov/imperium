import { Card, Nation, Suit, Icon } from '../../types';

const bactria: Card = {
  cardName: 'Bactria',
  icon: Icon.PINNED,
  effect: 'Gain 3 {materials}. You MAY garrison a card.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER19/23',
  suit: Suit.REGION,
};

export default bactria;