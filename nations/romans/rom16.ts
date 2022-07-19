import { Card, Nation } from '../../types';
import advanceBase from '../advance';

const advance: Card = {
  ...advanceBase,
  nation: Nation.ROMANS,
  cardNumber: '1ROM16/23',
};

export default advance;