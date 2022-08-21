import { Card, Nation, Suit, State } from '../../types';

const lydians: Card = {
  cardName: 'Lydians',
  state: State.BARBARIAN,
  effect: 'Gain 2 {population}. Put this card into your history.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER1/23',
  suit: Suit.TRIBUTARY,
};

export default lydians;