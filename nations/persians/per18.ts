import { Card, Nation} from '../../types';
import conquerBase from '../advance';

const conquer: Card = {
  ...conquerBase,
  nation: Nation.PERSIANS,
  cardNumber: '1PER18/23',
};

export default conquer;