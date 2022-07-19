import { Card, Suit } from '../../types';

const diplomacy: Card = {
  cardName: 'Diplomacy',
  effect: 'Pay 3 {materials} to break through for {tributary}.',
  suit: Suit.UNCIVILISED_CIVILISED, 
  cardNumber: '1UNC20/22',
  vp: 1,
};

export default diplomacy;