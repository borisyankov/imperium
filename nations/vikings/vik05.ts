import { Card, Icon, Nation, StartingLocation, State, Suit } from '../../types';
import * as E from '../../effects';

const graenland: Card = {
  cardName: 'Graenland',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: [E.GARRISON, 'Choose: gain 1 {population} OR look at the top card of your nation deck, then you MAY shuffle the nation deck.'],
  suit: Suit.REGION,
  nation: Nation.VIKINGS,
  cardNumber: '1VIK5/26',
  startingLocation: StartingLocation.NATION,
};

export default graenland;