import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const greekInnovation: Card = {
  cardName: 'Greek Innovation',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'Place 2 cards on top of your deck to acquire {uncivilised} / {civilised} / {region} / {tributary}. Each other player recalls a {pinned}.',
  developmentCost: { materials: 3, population: 2 },
  nation: Nation.GREEKS,
  cardNumber: '1GRE7/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  vp: 3,
};

export default greekInnovation;