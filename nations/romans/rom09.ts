import { Card, Nation, StartingLocation } from '../../types';
import baseProsperity from '../prosperity';

const prosperity: Card = {
  ...baseProsperity,
  nation: Nation.ROMANS,
  cardNumber: '1ROM9/23',
  startingLocation: StartingLocation.NATION,
};

export default prosperity;