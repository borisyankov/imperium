import { Card, Suit, State, Icon, CardType } from '../../types';
import * as E from '../../effects';

const cataphract: Card = {
  cardName: 'Cataphract',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  cardType: [CardType.KNIGHT],
  effect: [E.EACH_ABANDON_REGION, 'You MAY acquire {region} / {tributary}.', 'You MAY garrison this card in a {region} to trigger that card\'s play effect.'],
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV15/15',
  vp: 2,
};

export default cataphract;