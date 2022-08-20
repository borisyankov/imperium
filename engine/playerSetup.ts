import { Nation, Player, State } from '../types';

export const playerSetup = (nation: Nation): Player => ({
  nation,
  resources: {
    materials: 3,
    population: 2,
    progress: 1,
  },
  // exhaust: 5,
  // actions: 3,
  state: State.BARBARIAN, // except Atlanteans
});

export const botSetup = (nation: Nation): Player => ({
  nation,
  resources: {
    materials: 0,
    population: 0,
    progress: 0,
  },
  state: State.BARBARIAN, // except Atlanteans
});
