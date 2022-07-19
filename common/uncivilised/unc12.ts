import { Card, Suit, Icon } from '../../types';

const shaduf: Card = {
  cardName: 'Shaduf',
  icon: Icon.PINNED,
  effect: 'Exhaust: when you gain {materials} from a {river} in play, exhaust this card to gain 1 {progress}.',
  suit: Suit.UNCIVILISED, 
  cardNumber: '1UNC12/22',
  vp: '2 VP per {river}',
};

export default shaduf;