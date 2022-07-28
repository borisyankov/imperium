import { Card, Nation, StartingLocation, State } from '../../types';

const pericles: Card = {
  cardName: 'Pericles',
  state: State.EMPIRE,
  effect: 'Free play. Acquire {uncivilised} / {civilised} / {region} / {tributary}. Put this card into your history.',
  developmentCost: { materials: 3, population: 2 },
  nation: Nation.GREEKS,
  cardNumber: '1GRE4/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  vp: 3,
};

export default pericles;