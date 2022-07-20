import { Card, Suit, Icon } from '../../types';

const ambassador: Card = {
  cardName: 'Ambassador',
  icon: Icon.PINNED,
  effect: 'Exhaust: resolve the exhaust keyword of an opponent\'s {pinned} card as though it were your own.',
  suit: Suit.UNCIVILISED_CIVILISED,
  playerCount: 3,
  cardNumber: '1UNC14/22',
};

export default ambassador;