import { Card, Nation } from '../../types';
import unrestBase from '../unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.ROMANS,
  cardNumber: '1ROM22/23',
};

export default unrest;