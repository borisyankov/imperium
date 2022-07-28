import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const sagas: Card = {
  cardName: 'Sagas',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: 'Solstice: you MAY garrison a card.',
  nation: Nation.VIKINGS,
  cardNumber: '1VIK8/26',
  startingLocation: StartingLocation.NATION,
  vp: '1 VP per garrisoned card here',
};

export default sagas;