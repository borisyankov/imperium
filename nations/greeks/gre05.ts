import { Card, StartingLocation, State } from '../../types';
import unc15 from '../../common/uncivilised/unc15';

const cityOfCorinth: Card = {
  ...unc15,
  cardName: 'City of Corinth',
  state: State.EMPIRE,
  cardNumber: '1GRE5/23',
  developmentCost: { materials: 3, population: 2 },
  startingLocation: StartingLocation.DEVELOPMENT,
  suit: undefined, 
  vp: 3,
};

export default cityOfCorinth;