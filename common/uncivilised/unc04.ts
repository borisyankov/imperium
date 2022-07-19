import { Card, Suit, Icon, State } from '../../types';

const town: Card = {
  cardName: 'Town',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: 'Exhaust: all players MAY gain 2 {materials}. Solstice: you MAY gain 2 {progress}. If you do, choose: abandon this card OR put it into your history.',
  suit: Suit.UNCIVILISED, 
  cardNumber: '1UNC4/22',
  vp: '2 VP if in your history',
};

export default town;