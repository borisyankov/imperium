import { Card, Icon, Nation, State, Suit } from '../../types';
import * as E from '../../effects';

const carpathianMountains: Card = {
  cardName: 'Carpathian Mountains',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: [E.GAIN({ population: 1 }), E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY18/24',
};

export default carpathianMountains;