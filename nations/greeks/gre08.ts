import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const directDemocracy: Card = {
  cardName: 'Direct Democracy',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Passive: reduce the cost in {materials} or cards to play an {unrest} by 1 (to aminimum of 1). Exhaust: free play an {unrest}.',
  developmentCost: { materials: 3, population: 2 },
  nation: Nation.GREEKS,
  cardNumber: '1GRE8/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  vp: 3,
};

export default directDemocracy;