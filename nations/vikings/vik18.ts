import { Card, Nation} from '../../types';
import advanceBase from '../advance';

const advance: Card = {
  ...advanceBase,
  nation: Nation.VIKINGS,
  cardNumber: '1VIK18/26',
};

export default advance;