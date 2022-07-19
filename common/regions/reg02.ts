import { Card, Icon, Suit } from '../../types';

const jungle: Card = {
  cardName: 'Jungle',
  icon: Icon.PINNED,
  effect: 'Gain 1 {population}. Exile a card from the market. You MAY garrison a card.',
  suit: Suit.REGION,
  cardNumber: '1REG2/14',
  vp: 1,
};

export default jungle;