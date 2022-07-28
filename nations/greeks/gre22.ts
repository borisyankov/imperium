import { Card, Nation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.GREEKS,
  cardNumber: '1GRE22/23',
};

export default unrest;