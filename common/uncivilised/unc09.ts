import { Card, Suit,  State } from '../../types';

const oracle: Card = {
  cardName: 'Oracle',
  state: State.BARBARIAN,
  effect: 'Free play. Draw 2 cards and discard one of them.',
  suit: Suit.UNCIVILISED, 
  cardNumber: '1UNC9/22',
  vp: '2 VP per {fame}',
};

export default oracle;