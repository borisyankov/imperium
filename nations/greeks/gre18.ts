import { Card, Nation, State } from '../../types';

const settlers: Card = {
  cardName: 'Settlers',
  state: State.BARBARIAN,
  effect: 'Choose: pay 1 {population} to acquire {region} OR gain 1 {progress} OR return an {unrest}.',
  nation: Nation.GREEKS,
  cardNumber: '1GRE18/23',
};

export default settlers;