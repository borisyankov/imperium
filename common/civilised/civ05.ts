import { Card, Suit, State, Icon } from '../../types';

const onager: Card = {
  cardName: 'Onager',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'Solstice: choose: gain 1 {population} OR gain 1 {materials} OR draw a card.',
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV5/15',
  vp: 2,
};

export default onager;