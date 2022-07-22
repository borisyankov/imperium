import { Card, Nation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.CARTHAGINIANS,
  cardNumber: '1CAR23/23',
};

export default unrest;