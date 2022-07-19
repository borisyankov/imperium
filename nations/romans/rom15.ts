import { Card, Nation } from '../../types';
import prosperityBase from '../prosperity';

const prosperity: Card = {
  ...prosperityBase,
  nation: Nation.ROMANS,
  cardNumber: '1ROM15/23',
};

export default prosperity;