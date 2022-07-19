import { Card, State, Nation, StartingLocation } from '../../types';

const emperorTrajan: Card = {
  cardName: 'Emperor Trajan',
  state: State.EMPIRE,
  effect: 'Acquire {uncivilised} / {civilised} / {region} / {tributary}. Put this card into your history.',
  nation: Nation.ROMANS,
  cardNumber: '1ROM8/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 2, population: 1 },
  vp: '1 VP per 3 {population}',
};

export default emperorTrajan;