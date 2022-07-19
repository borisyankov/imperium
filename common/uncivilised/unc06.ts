import { Card, Suit, Icon, State } from '../../types';

const shrine: Card = {
  cardName: 'Shrine',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: 'Exhaust: pay 1 {materials} to draw a card. Solstice: you MAY discard a card to return an {unrest} from your discard pile.',
  suit: Suit.UNCIVILISED, 
  cardNumber: '1UNC6/22',
  vp: 1,
};

export default shrine;