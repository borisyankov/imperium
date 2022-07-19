import { Card, State, Nation, Icon, StartingLocation } from '../../types';

const romanInvasion: Card = {
  cardName: 'Roman Invasion',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'You MAY acquire {region} / {tributary}. Each other player abandons a {region}.',
  nation: Nation.ROMANS,
  cardNumber: '1ROM4/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { population: 3 },
  vp: 2,
};

export default romanInvasion;