import { Card,  State, Nation, Icon, StartingLocation } from '../../types';

const militaryEngineering: Card = {
  cardName: 'Military Engineering',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'Each other player discards 2 cards. You MAY break through for {civilised}.',
  nation: Nation.ROMANS,
  cardNumber: '1ROM3/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 4, population: 1 },
  vp: 3,
};

export default militaryEngineering;