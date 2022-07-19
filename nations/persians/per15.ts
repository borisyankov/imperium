import { Card, Nation} from '../../types';
import prosperityBase from '../prosperity';

const prosperity: Card = {
  ...prosperityBase,
  nation: Nation.PERSIANS,
  cardNumber: '1PER15/23',
};

export default prosperity;