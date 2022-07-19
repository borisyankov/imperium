import { Card,  Nation, StartingLocation, Icon } from '../../types';

const breadAndCircuses: Card = {
  cardName: 'Bread And Circuses',
  icon: Icon.PINNED,
  effect: 'Solstice: discard a card. You MAY return an {unrest} from your hand. You MAY return an {unrest} from your discard pile.',
  nation: Nation.ROMANS,
  cardNumber: '1ROM10/23',
  startingLocation: StartingLocation.NATION,
};

export default breadAndCircuses;