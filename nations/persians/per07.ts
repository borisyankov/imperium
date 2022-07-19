import { Card, State, Nation, StartingLocation, Icon } from '../../types';

const persianGold: Card = {
  cardName: 'Persian Gold',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'All players gain 2 {materials}. You gain 1 {progress}. Each other player takes 1 {unrest}.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER7/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 7 },
  vp: 4,
};

export default persianGold;