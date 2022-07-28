import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const science: Card = {
  cardName: 'Science',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Passive: increase your hand size by 1. Your Adcance cards lose the {barbarian} icon.',
  developmentCost: { materials: 3, population: 2 },
  nation: Nation.GREEKS,
  cardNumber: '1GRE6/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  vp: 3,
};

export default science;