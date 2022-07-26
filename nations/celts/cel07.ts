import { Card, Nation, StartingLocation, State } from '../../types';

const vercingetorix: Card = {
  cardName: 'Vercingetorix',
  state: State.EMPIRE,
  effect: 'You MAY acquire {uncivilised} / {civilised} / {region} / {tributary}. Put this card into your history.',
  nation: Nation.CELTS,
  cardNumber: '1CEL7/28',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 4 },
  vp: '1 VP per {uncivilised}',
};

export default vercingetorix;