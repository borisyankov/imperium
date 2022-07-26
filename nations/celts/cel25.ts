import { Card, Nation, StartingLocation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.CELTS,
  playerCount: 3,
  cardNumber: '1CEL25/28',
  startingLocation: StartingLocation.SUPPLY,
};

export default unrest;