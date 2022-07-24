import { Card, Nation, StartingLocation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY7/24',
  startingLocation: StartingLocation.NATION,
};

export default unrest;