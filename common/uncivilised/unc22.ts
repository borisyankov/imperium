import { Card, Suit, CardType } from '../../types';

const lostScroll: Card = {
  cardName: 'Lost Scroll',
  cardType: [CardType.SCROLL],
  effect: 'Free play. You MAY return a card from your discard pile to the top of your deck. All players MAY draw a card.',
  suit: Suit.UNCIVILISED_CIVILISED,
  playerCount: 3,
  cardNumber: '1UNC22/22',
  vp: '1 VP if in history',
};

export default lostScroll;