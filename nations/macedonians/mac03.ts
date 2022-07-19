import { Card, Nation, StartingLocation, State } from '../../types';

const development: Card = {
  cardName: 'Development',
  state: State.EMPIRE,
  effect: 'Choose: develop OR pay 2 {materials} to acquire {uncivilised} / {civilised}.',
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC3/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 4, population: 1 },
  vp: 3,
};

export default development;