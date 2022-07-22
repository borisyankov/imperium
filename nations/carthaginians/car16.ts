import { Card, Nation } from '../../types';
import advanceBase from '../advance';

const advance: Card = {
  ...advanceBase,
  nation: Nation.CARTHAGINIANS,
  cardNumber: '1CAR16/23',
};

export default advance;