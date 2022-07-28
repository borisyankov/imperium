import { Card, StartingLocation, State } from '../../types';
import unc15 from '../../common/uncivilised/unc15';

const cityOfDubhLinn: Card = {
  ...unc15,
  cardName: 'City of Dubh Linn',
  state: State.BARBARIAN,
  cardNumber: '1VIK9/26',
  startingLocation: StartingLocation.NATION,
  vp: '1 VP per 8 {materials}',
};

export default cityOfDubhLinn;