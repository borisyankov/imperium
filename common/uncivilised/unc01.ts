import { Card, Suit, Icon } from '../../types';

const standingArmy: Card = {
  cardName: 'Standing Army',
  icon: Icon.PINNED,
  effect: 'Passive: when another player plays an {attack}, ignore the effects unless they give you 1 {progress}.',
  suit: Suit.UNCIVILISED,
  playerCount: 4,
  cardNumber: '1UNC1/22',
  vp: 1,
};

export default standingArmy;