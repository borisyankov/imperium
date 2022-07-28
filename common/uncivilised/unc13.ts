import { Card, Suit, State } from '../../types';

const ritualsAndCeremonies: Card = {
  cardName: 'Rituals & Ceremonies',
  state: State.BARBARIAN,
  effect: 'Free play. Choose: return an {unrest} OR gain 1 {progress} and you MAY return an {exhaust} to your state card.',
  suit: Suit.UNCIVILISED_CIVILISED,
  playerCount: 3,
  cardNumber: '1UNC13/22',
  vp: 1,
};

export default ritualsAndCeremonies;