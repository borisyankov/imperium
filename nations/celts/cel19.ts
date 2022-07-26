import { Card, Icon, Nation, State } from '../../types';

const cattleRaid: Card = {
  cardName: 'Cattle Raid',
  icon: Icon.ATTACK,
  state: State.BARBARIAN,
  effect: 'Gain 2 {materials}. Steal 1 {materials} from each player with at least one {region} in play. Steal 1 {progress} from each {empire} player.',
  nation: Nation.CELTS,
  cardNumber: '1CEL19/28',
};

export default cattleRaid;