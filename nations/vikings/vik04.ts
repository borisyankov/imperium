import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const combs: Card = {
  cardName: 'Combs',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: 'Exhaust: ignore the {empire} icon on the next card you play this turn.',
  nation: Nation.VIKINGS,
  cardNumber: '1VIK4/26',
  startingLocation: StartingLocation.NATION,
  vp: '1 VP per 3 {population}',
};

export default combs;