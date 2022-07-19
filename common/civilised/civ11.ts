import { Card, Suit, State, Icon } from '../../types';

const exportsCard: Card = {
  cardName: 'Exports',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'All players gain 2 {materials}. Give each other player a card from your hand or discard pile.',
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV11/15',
  vp: '1 VP per 10 cards',
};

export default exportsCard;