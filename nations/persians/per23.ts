import { Card, Nation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.PERSIANS,
  cardNumber: '1PER23/23',
};

export default unrest;