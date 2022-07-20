import { Card,  Nation, StartingLocation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.ROMANS,
  cardNumber: '1ROM13/23',
  startingLocation: StartingLocation.NATION,
};

export default unrest;