import { Card, Nation, StartingLocation, State } from '../../types';

const hannibal: Card = {
  cardName: 'Hannibal',
  state: State.EMPIRE,
  effect: 'You MAY acquire {uncivilised} / {civilised} / {region} / {tributary}. You MAY draw a card. You MAY draw a card from your history. Put this card into your history.',
  nation: Nation.CARTHAGINIANS,
  startingLocation: StartingLocation.DEVELOPMENT,
  cardNumber: '1CAR6/23',
  developmentCost: { population: 4 },
  vp: 4,
};

export default hannibal;