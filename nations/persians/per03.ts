import { Card, State, Nation, StartingLocation, Icon } from '../../types';

const batteringRam: Card = {
  cardName: 'Battering Ram',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'Each other player abandons a {city}. You MAY break through for {region} / {tributary}',
  nation: Nation.PERSIANS,
  cardNumber: '1PER3/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { population: 4 },
  vp: 2,
};

export default batteringRam;