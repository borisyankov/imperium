import { Card, State, Nation, Icon, StartingLocation } from '../../types';

const legions: Card = {
  cardName: 'Legions',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Passive: increase your hand size by 1. Your Conquer cards lose the {barbarian} icon.',
  nation: Nation.ROMANS,
  cardNumber: '1ROM5/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { population: 3 },
  vp: 2,
};

export default legions;