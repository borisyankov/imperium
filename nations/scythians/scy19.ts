import { Card, Icon, Nation, State, Suit } from '../../types';

const tianShan: Card = {
  cardName: 'Tian Shan',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: 'Gain 1 {population}. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY19/24',
};

export default tianShan;