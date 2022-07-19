import { Card, Suit, State, Icon } from '../../types';

const cataphract: Card = {
  cardName: 'Cataphract',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'Each other player abandons a {region}. You MAY acquire {region} / {tributary}. You MAY garrison this card in a {region} to trigger that card\'s play effect.',
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV15/15',
  vp: 2,
};

export default cataphract;