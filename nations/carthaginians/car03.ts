import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const elephants: Card = {
  cardName: 'Elephants',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'Each other player abandons a {region}. You MAY break through for {region} / {tributary}. Put this card in your history.',
  nation: Nation.CARTHAGINIANS,
  startingLocation: StartingLocation.DEVELOPMENT,
  cardNumber: '1CAR3/23',
  developmentCost: { population: 3 },
  vp: 2,
};

export default elephants;