import { Card, Nation } from '../../types';
import unrestBase from '../unrest';

const unrest: Card = {
  ...unrestBase,
  nation: Nation.PERSIANS,
  cardNumber: '1PER22/23',
};

export default unrest;