import { Card, Suit, State } from '../../types';

const education: Card = {
  cardName: 'Education',
  state: State.EMPIRE,
  effect: 'Free play. You MAY put a card from your hand into your history. You MAY put a card from your discard pile into your history.',
  suit: Suit.CIVILISED,
  cardNumber: '1CIV2/15',
  vp: 2,
};

export default education;