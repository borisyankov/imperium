import { Card, State, Nation, StartingLocation } from '../../types';

const satrap: Card = {
  cardName: 'Satrap',
  state: State.EMPIRE,
  effect: 'Free play. Pay 3 {materials} to gain 1 action.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER6/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 4, population: 2 },
  vp: 3,
};

export default satrap;