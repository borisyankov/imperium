import { Card, Nation} from '../../types';
import conquerBase from '../conquer';

const conquer: Card = {
  ...conquerBase,
  nation: Nation.CELTS,
  cardNumber: '1CEL17/28',
};

export default conquer;