import { Card, Nation, StartingLocation, State } from '../../types';

const greekProsperity: Card = {
  cardName: 'Greek Prosperity',
  state: State.EMPIRE,
  effect: 'Choose: gain 1 {materials} per {production} OR gain 1 {population} per {region} OR draw a card per {city} / {metropolis} in play.',
  developmentCost: { materials: 2, population: 2 },
  nation: Nation.GREEKS,
  cardNumber: '1GRE3/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  vp: 2,
};

export default greekProsperity;