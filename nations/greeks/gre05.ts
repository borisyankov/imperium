import { Card, StartingLocation, State } from '../../types';
import city from '../../common/city';

const cityOfCorinth: Card = {
  ...city,
  cardName: 'City of Corinth',
  state: State.EMPIRE,
  cardNumber: '1GRE5/23',
  developmentCost: { materials: 3, population: 2 },
  startingLocation: StartingLocation.DEVELOPMENT,
  vp: 3,
};

export default cityOfCorinth;