import { Card, Suit, State, Icon } from '../../types';

const coinage: Card = {
  cardName: 'Coinage',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Exhaust: draw a card. Solstice: gain 2 {materials}.',
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV10/15',
  vp: 2,
};

export default coinage;