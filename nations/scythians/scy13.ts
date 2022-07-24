import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const raiders: Card = {
  cardName: 'Raiders',
  icon: Icon.ATTACK,
  state: State.BARBARIAN,
  effect: 'Free play. Draw 2 cards. All other players recall a {region}. Steal 1 {population} from each {empire} player.',
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY13/24',
  startingLocation: StartingLocation.NATION,
};

export default raiders;