import { Card, State, Nation, StartingLocation } from '../../types';

const development: Card = {
  cardName: 'Development',
  state: State.EMPIRE,
  effect: 'Choose: develop OR pay 2 {materials} to acquire {uncivilised} / {civilised}.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER4/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 4, population: 2 },
  vp: 3,
};

export default development;