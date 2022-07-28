import { Card, Nation, StartingLocation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.GREEKS,
  cardNumber: '1GRE13/23',
  startingLocation: StartingLocation.NATION,
};

export default unrest;