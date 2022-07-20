import { Card, Icon, Suit } from '../../types';

const wilderness: Card = {
  cardName: 'Wilderness',
  icon: Icon.PINNED,
  effect: 'Exile a card from the Market. You MAY garrison a card. Passive: you MAY recall this card to avoid hte effect of an {attack}.',
  suit: Suit.REGION,
  playerCount: 3,
  cardNumber: '1REG1/14',
  vp: 1,
};

export default wilderness;