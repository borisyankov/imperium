import { Card, Suit, State } from '../../types';

const mercenaries: Card = {
  cardName: 'Mercenaries',
  state: State.EMPIRE,
  effect: 'Free play. Pay 1 {population} to gain 1 action.',
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV13/15',
  vp: '1 VP per 4 {population}',
};

export default mercenaries;