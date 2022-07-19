import { Card, Suit, Icon } from '../../types';

const notorious: Card = {
  cardName: 'Notorious',
  icon: Icon.ATTACK,
  effect: 'Free play. Steal 1 {progress} from each other player. Anyone unable to pay takes {unrest}.',
  suit: Suit.FAME, 
  cardNumber: '1FAM3/9',
  vp: '1 VP per {unrest} scored by other players',
};

export default notorious;