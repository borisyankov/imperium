import { Card, Icon, Nation, State } from '../../types';

const althing: Card = {
  cardName: 'Althing',
  icon: Icon.ATTACK,
  state: State.BARBARIAN,
  effect: 'Steal 1 {materials} from each other player. Choose: gain 1 {progress} OR return an {unrest}.',
  nation: Nation.VIKINGS,
  cardNumber: '1VIK23/26',
};

export default althing;