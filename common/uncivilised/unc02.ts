import { Card, Suit, CardType } from '../../types';

const jadeMask: Card = {
  cardName: 'Jade Mask',
  cardType: [CardType.MASK],
  effect: 'Draw up to 3 cards if able. Then return a card to the top of your deck.',
  suit: Suit.UNCIVILISED, 
  cardNumber: '1UNC2/22',
  vp: '1 VP if in history',
};

export default jadeMask;