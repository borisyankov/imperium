import { Card, Nation, StartingLocation } from '../../types';
import baseProsperity from '../prosperity';

const prosperity: Card = {
  ...baseProsperity,
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC10/23',
  startingLocation: StartingLocation.NATION,
};

export default prosperity;