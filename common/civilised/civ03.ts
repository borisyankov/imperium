import { Card, Suit, State } from '../../types';

const moneylenders: Card = {
  cardName: 'Moneylenders',
  state: State.EMPIRE,
  effect: 'Free play. Pay 3 {materials} to gain 1 action.',
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV3/15',
  vp: '1 VP per 10 {materials}',
};

export default moneylenders;