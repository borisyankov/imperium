import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const goAViking: Card = {
  cardName: 'Go A\'Viking',
  icon: Icon.ATTACK,
  state: State.BARBARIAN,
  effect: 'Free to play. Steal 2 {materials} from each other player. Anyone unable to pay takes {unrest}.',
  nation: Nation.VIKINGS,
  cardNumber: '1VIK13/26',
  startingLocation: StartingLocation.NATION,
};

export default goAViking;