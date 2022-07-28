import { Card, Nation, StartingLocation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.VIKINGS,
  cardNumber: '1VIK15/26',
  startingLocation: StartingLocation.NATION,
};

export default unrest;