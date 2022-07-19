import { Card, Nation, StartingLocation } from '../../types';
import city from '../../common/uncivilised/unc15';

const alexandriaInEgypt: Card = {
  ...city,
  cardName: 'Alexandria In Ariana',
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC9/23',
  suit: undefined,
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 4, population: 2 },
  vp: '1 VP per 2 {region}',
};

export default alexandriaInEgypt;