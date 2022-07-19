import { Card, State, Nation, StartingLocation } from '../../types';

const dariusI: Card = {
  cardName: 'Darius I',
  state: State.EMPIRE,
  effect: 'Acquire {uncivilised} / {civilised} / {region} / {tributary}. Put this card into your history.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER9/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 3, population: 2 },
  vp: '1 VP per {tributary}',
};

export default dariusI;