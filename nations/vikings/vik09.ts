import { Card, StartingLocation, State } from '../../types';
import city from '../../common/city';

const cityOfDubhLinn: Card = {
  ...city,
  cardName: 'City of Dubh Linn',
  state: State.BARBARIAN,
  cardNumber: '1VIK9/26',
  startingLocation: StartingLocation.NATION,
  vp: '1 VP per 8 {materials}',
};

export default cityOfDubhLinn;