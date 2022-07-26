import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const chainmail: Card = {
  cardName: 'Chainmail',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Passive: when you play an {attack}, gain 1 {progress}.',
  nation: Nation.CELTS,
  cardNumber: '1CEL4/28',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 3, population: 1 },
  vp: 4,
};

export default chainmail;