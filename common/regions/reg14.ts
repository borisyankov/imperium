import { Card, Icon, State, Suit } from '../../types';

const sacredPass: Card = {
  cardName: 'Sacred Pass',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: 'Exhaust: you MAY look at the top card of your nation deck. You MAY then abandon this card to swap a card from your hand with the top of your nation deck.',
  suit: Suit.REGION, 
  cardNumber: '1REG14/14',
  vp: 1,
}

export default sacredPass;