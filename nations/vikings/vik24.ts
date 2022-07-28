import { Card, Nation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.VIKINGS,
  cardNumber: '1CAR24/26',
};

export default unrest;