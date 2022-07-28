import { Card, StartingLocation } from '../../types';
import city from '../../common/city';

const cityOfAthens: Card = {
  ...city,
  cardName: 'City of Athens',
  cardNumber: '1GRE11/23',
  startingLocation: StartingLocation.NATION,
};

export default cityOfAthens;