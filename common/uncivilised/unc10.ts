import { Card, Suit, Icon } from '../../types';

const agriculture: Card = {
  cardName: 'Agriculture',
  icon: Icon.PINNED,
  effect: 'Exhaust: treat 1 {fertile} as 3 {production} for the rest of the turn.',
  suit: Suit.UNCIVILISED, 
  cardNumber: '1UNC10/22',
  vp: '2 VP per {plant}',
};

export default agriculture;