import { Card, Nation } from '../../types';
import city from '../../common/city';

const cityOfRome: Card = {
  ...city,
  cardName: 'City Of Rome',
  nation: Nation.ROMANS,
  cardNumber: '1ROM19/23',
};

export default cityOfRome;