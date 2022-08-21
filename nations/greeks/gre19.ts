import { Card, State } from '../../types';
import city from '../../common/city';

const cityOfSparta: Card = {
  ...city,
  state: State.BARBARIAN,
  cardName: 'City of Sparta',
  cardNumber: '1GRE19/23',
};

export default cityOfSparta;