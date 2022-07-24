import { Card, Nation } from '../../types';
import baseAdvance from '../advance';

const advance: Card = {
  ...baseAdvance,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY16/24',
};

export default advance;