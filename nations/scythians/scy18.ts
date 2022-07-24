import { Card, Icon, Nation, State, Suit } from '../../types';

const carpathianMountains: Card = {
  cardName: 'Carpathian Mountains',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: 'Gain 1 {population}. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY18/24',
};

export default carpathianMountains;