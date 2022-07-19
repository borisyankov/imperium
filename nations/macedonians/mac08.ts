import { Card, Nation, StartingLocation } from '../../types';
import metropolis from '../../common/civilised/civ06';

const alexandriaInEgypt: Card = {
  ...metropolis,
  cardName: 'Alexandria In Egypt',
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC8/23',
  suit: undefined,
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 4, population: 1 },
  vp: 2,
};

export default alexandriaInEgypt;