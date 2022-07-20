import { Card, Nation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.MACEDONIANS,
  cardNumber: '1ROM23/23',
};

export default unrest;