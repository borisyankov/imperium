import { Card, StartingLocation } from '../../types';
import unc15 from '../../common/uncivilised/unc15';

const cityOfAthens: Card = {
  ...unc15,
  cardName: 'City of Athens',
  cardNumber: '1GRE11/23',
  startingLocation: StartingLocation.NATION,
  suit: undefined,
};

export default cityOfAthens;