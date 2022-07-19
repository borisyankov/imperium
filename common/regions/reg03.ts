import { Card, Icon, Suit } from '../../types';

const mountain: Card = {
  cardName: 'Mountain',
  icon: Icon.PINNED,
  effect: 'Gain 3 {materials}. Exile a card from the market. You MAY garrison a card.',
  suit: Suit.REGION, 
  cardNumber: '1REG3/14',
  vp: 1,
}

export default mountain;