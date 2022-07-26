import { Card, Nation } from '../../types';
import advanceBase from '../advance';

const advance: Card = {
  ...advanceBase,
  nation: Nation.CELTS,
  cardNumber: '1CEL16/28',
};

export default advance;