import { Card, Icon, Nation, State } from '../../types';

const boudicca: Card = {
  cardName: 'Boudicca',
  icon: Icon.ATTACK,
  state: State.BARBARIAN,
  effect: 'Gain 1 {progress}. Each other player abandons a {region}. Put this card into your history.',
  nation: Nation.CELTS,
  cardNumber: '1CEL18/28',
};

export default boudicca;