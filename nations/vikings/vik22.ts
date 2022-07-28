import { Card, Icon, Nation, State } from '../../types';

const jomsviking: Card = {
  cardName: 'Jomsviking',
  icon: Icon.ATTACK,
  state: State.BARBARIAN,
  effect: 'Pay 1 {population} and 2 {materials} to acquire {region} / {tributary}. Each other player discards a CardType.',
  nation: Nation.VIKINGS,
  cardNumber: '1VIK22/26',
};

export default jomsviking;