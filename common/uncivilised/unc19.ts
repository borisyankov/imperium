import { Card, Suit, Icon } from '../../types';

const port: Card = {
  cardName: 'Port',
  icon: Icon.PINNED,
  effect: 'Exhaust: gain 1 {materials} per {river} in your play area. You MAY pay 3 {materials} to draw a card of your choice from your discard pile.',
  suit: Suit.UNCIVILISED_CIVILISED, 
  cardNumber: '1UNC19/22',
  vp: 1,
};

export default port;