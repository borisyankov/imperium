import { Card, Nation} from '../../types';
import advanceBase from '../advance';

const advance: Card = {
  ...advanceBase,
  nation: Nation.PERSIANS,
  cardNumber: '1PER16/23',
};

export default advance;