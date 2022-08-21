import { Card, Nation} from '../../types';
import conquerBase from '../conquer';

const conquer: Card = {
  ...conquerBase,
  nation: Nation.GREEKS,
  cardNumber: '1GRE17/23',
};

export default conquer;