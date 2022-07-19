import { Card, Suit, State, Icon } from '../../types';

const pharmacy: Card = {
  cardName: 'Pharmacy',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Solstice: choose: gain 1 {population} or pay 2 {population} to gain 1 {progress}.',
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV8/15',
  vp: 2,
};

export default pharmacy;