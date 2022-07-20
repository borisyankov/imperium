import { Card, Nation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.ROMANS,
  cardNumber: '1ROM22/23',
};

export default unrest;