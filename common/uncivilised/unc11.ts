import { Card, Suit, Icon } from '../../types';

const boats: Card = {
  cardName: 'Boats',
  icon: Icon.PINNED,
  effect: 'Exhaust: choose: recall a {river} to gain 2 {materials} and 1 {population} OR recall a {fertile} to gain 1 action.',
  suit: Suit.UNCIVILISED, 
  cardNumber: '1UNC11/22',
  vp: '1 VP per {fertile} / {river}',
};

export default boats;