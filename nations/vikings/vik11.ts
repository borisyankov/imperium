import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const skis: Card = {
  cardName: 'Skis',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: 'Exhaust: when you play a {region}, exhaust this card to choose: draw a card OR gain 2 {materials}.',
  nation: Nation.VIKINGS,
  cardNumber: '1VIK11/26',
  startingLocation: StartingLocation.NATION,
  vp: 2,
};

export default skis;