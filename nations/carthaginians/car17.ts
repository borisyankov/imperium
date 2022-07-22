import { Card, Nation} from '../../types';
import conquerBase from '../advance';

const conquer: Card = {
  ...conquerBase,
  nation: Nation.CARTHAGINIANS,
  cardNumber: '1CAR17/23',
};

export default conquer;