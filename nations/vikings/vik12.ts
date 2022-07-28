import { Card, Nation, StartingLocation, State } from '../../types';

const rolloTheWalker: Card = {
  cardName: 'Rollo the Walker',
  state: State.BARBARIAN,
  effect: 'Take the top {fame} card. Exile this card.',
  nation: Nation.VIKINGS,
  cardNumber: '1VIK12/26',
  startingLocation: StartingLocation.NATION,
};

export default rolloTheWalker;