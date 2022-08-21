import { Card, Nation, StartingLocation} from '../../types';
import conquerBase from '../conquer';

const conquer: Card = {
  ...conquerBase,
  nation: Nation.CELTS,
  cardNumber: '1CEL8/28',
  startingLocation: StartingLocation.NATION,
};

export default conquer;