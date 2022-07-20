import { Card, Suit, State, Icon } from '../../types';

const wonder: Card = {
  cardName: 'Wonder',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Exhaust: when you return an {unrest}, exhaust this card to gain 2 {progress}.',
  suit: Suit.CIVILISED,
  playerCount: 3,
  cardNumber: '1CIV9/15',
  vp: 2,
};

export default wonder;