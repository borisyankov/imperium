import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const lighthouse: Card = {
  cardName: 'Lighthouse',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Exhaust: choose: place an {attack} from your discard pile on the top of your deck OR swap an exiled card with a card in the market.',
  developmentCost: { materials: 5 },
  nation: Nation.GREEKS,
  cardNumber: '1GRE9/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  vp: 3,
};

export default lighthouse;