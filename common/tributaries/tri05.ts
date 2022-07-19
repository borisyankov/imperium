import { Card, Icon, Suit } from '../../types';

const qin: Card = {
  cardName: 'Qin',
  icon: Icon.PINNED,
  effect: 'Passive: increase your hand size by 1.',
  suit: Suit.TRIBUTARY, 
  cardNumber: '1TRI5/11',
  vp: '1 VP per 3 {pinned} cards in play, excluding {region}',
};

export default qin;