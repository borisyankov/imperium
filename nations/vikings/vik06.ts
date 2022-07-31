import { Card, Icon, Nation, StartingLocation, State, Suit } from '../../types';
import * as E from '../../effects';

const føroyar: Card = {
  cardName: 'Føroyar',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: [E.GARRISON, 'Choose: exile a card from the market OR gain 1 {population}.'],
  suit: Suit.REGION,
  nation: Nation.VIKINGS,
  cardNumber: '1VIK6/26',
  startingLocation: StartingLocation.NATION,
};

export default føroyar;