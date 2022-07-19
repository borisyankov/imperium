import { Card, Nation } from '../../types';
import city from '../../common/uncivilised/unc15';

const cityOfRome: Card = {
  ...city,
  cardName: 'City Of Rome',
  nation: Nation.ROMANS,
  cardNumber: '1ROM19/23',
};

export default cityOfRome;