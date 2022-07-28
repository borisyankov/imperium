import { Card, Nation } from '../../types';
import advanceBase from '../advance';

const advance: Card = {
  ...advanceBase,
  nation: Nation.GREEKS,
  cardNumber: '1GRE16/23',
};

export default advance;