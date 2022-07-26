import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const celticInnovation: Card = {
  cardName: 'Celtic Innovation',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'You MAY acquire {uncivilised} / {civilised}. Each other player takes {unrest}.',
  nation: Nation.CELTS,
  cardNumber: '1CEL3/28',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 2, population: 2 },
  vp: 4,
};

export default celticInnovation;