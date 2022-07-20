import { Card, Nation, StartingLocation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.PERSIANS,
  startingLocation: StartingLocation.NATION,
  cardNumber: '1PER13/23',
};

export default unrest;