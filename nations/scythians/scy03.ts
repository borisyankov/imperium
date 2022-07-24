import { Card, Nation, StartingLocation, State } from '../../types';

const ateas: Card = {
  cardName: 'Ateas',
  state: State.EMPIRE,
  effect: 'You MAY acquire {region}. You MAY return an {unrest}. Put this card into your history.',
  nation: Nation.SCYTHIANS,
  developmentCost: { population: 4 },
  cardNumber: '1SCY3/24',
  startingLocation: StartingLocation.DEVELOPMENT,
  vp: 3,
};

export default ateas;