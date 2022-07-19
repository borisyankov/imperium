import { Card, Nation } from '../../types';
import baseAdvance from '../advance';

const advance: Card = {
  ...baseAdvance,
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC13/23',
};

export default advance;