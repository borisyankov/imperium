import { Card, Icon, Suit } from '../../types';

const mauryans: Card = {
  cardName: 'Mauryans',
  icon: Icon.PINNED,
  effect: 'Solstice: choose: gain 2 {materials} OR return a {region} from your discard pile to your hand.',
  suit: Suit.TRIBUTARY, 
  playerCount: 4,
  cardNumber: '1TRI10/11',
  vp: '1 VP per 2 cards in history',
};

export default mauryans;