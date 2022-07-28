import { Card, Nation, StartingLocation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.VIKINGS,
  startingLocation: StartingLocation.SUPPLY,
  cardNumber: '1VIK26/26',
  playerCount: 4,
};

export default unrest;