import { Card, Nation} from '../../types';
import conquerBase from '../advance';

const conquer: Card = {
  ...conquerBase,
  nation: Nation.PERSIANS,
  cardNumber: '1PER17/23',
};

export default conquer;