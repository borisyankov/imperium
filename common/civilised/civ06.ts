import { Card, Suit, State, Icon, CardType } from '../../types';

const metropolis: Card = {
  cardName: 'Metropolis',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  cardType: [CardType.METROPOLIS],
  effect: 'Solstice: choose: gain 1 {population} OR gain 1 {materials} OR draw a card.',
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV6/15',
  vp: 2,
};

export default metropolis;