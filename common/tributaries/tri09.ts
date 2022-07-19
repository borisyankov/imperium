import { Card, State, Suit } from '../../types';

const minoans: Card = {
  cardName: 'Minoans',
  state: State.BARBARIAN,
  effect: 'Free play. Place a card on top of your deck and gain 2 {progress}.',
  suit: Suit.TRIBUTARY, 
  cardNumber: '1TRI9/11',
  vp: '1 VP per 4 {progress}',
};

export default minoans;