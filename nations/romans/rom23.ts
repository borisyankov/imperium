import { Card, Nation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.ROMANS,
  cardNumber: '1ROM23/23',
};

export default unrest;