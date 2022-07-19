import { Card, Nation } from '../../types';
import unrestBase from '../unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.ROMANS,
  cardNumber: '1ROM23/23',
};

export default unrest;