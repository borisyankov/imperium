import { Card, Suit } from '../../types';

const great: Card = {
  cardName: 'Great',
  effect: 'Free play. Gain 1 action. You MAY put this card into your history.',
  suit: Suit.FAME, 
  cardNumber: '1FAM2/9',
  vp: '6 VP if in history, 2 VP otherwise',
};

export default great;