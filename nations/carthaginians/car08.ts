import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const monopoly: Card = {
  cardName: 'Monopoly',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'Gain 2 {materials} and draw a card. Give each other player a card from your hand or discard pile.',
  nation: Nation.CARTHAGINIANS,
  startingLocation: StartingLocation.DEVELOPMENT,
  cardNumber: '1CAR8/23',
  developmentCost: { materials: 7 },
  vp: '1 VP per 5 {materials}',
};

export default monopoly;