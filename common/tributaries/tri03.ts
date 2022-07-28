import { Card, Suit } from '../../types';

const egyptians: Card = {
  cardName: 'Egyptians',
  effect: 'If {barbarian}, put the top card of your nation deck into discard pile. If {empire}, develop. Put this card into your history.',
  suit: Suit.TRIBUTARY, 
  cardNumber: '1TRI3/11',
  vp: '1 VP per {civilized}',
};

export default egyptians;