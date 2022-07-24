import { Card, Nation } from '../../types';
import unrestBase from '../../common/unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY22/24',
};

export default unrest;