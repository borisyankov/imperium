import { Card, Nation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.CARTHAGINIANS,
  cardNumber: '1CAR22/23',
};

export default unrest;