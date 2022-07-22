import { Card, Nation, StartingLocation, State } from '../../types';

const hegemony: Card = {
  cardName: 'Hegemony',
  state: State.EMPIRE,
  effect: 'Pay 2 {materials} to acquire {uncivilised} / {civilised} / {region} / {tributary}. All players MAY draw a card.',
  nation: Nation.CARTHAGINIANS,
  startingLocation: StartingLocation.DEVELOPMENT,
  cardNumber: '1CAR5/23',
  developmentCost: { materials: 3, population: 1 },
  vp: 2,
};

export default hegemony;