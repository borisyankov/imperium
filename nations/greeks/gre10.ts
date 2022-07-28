import { Card, Nation, StartingLocation, State } from '../../types';

const philosophy: Card = {
  cardName: 'Philosophy',
  state: State.EMPIRE,
  effect: 'Abandon a {pinned} (not a {region}) to break through for {uncivilised} / {civilised}.',
  developmentCost: { materials: 6 },
  nation: Nation.GREEKS,
  cardNumber: '1GRE10/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  vp: '1 VP per 5 cards',
};

export default philosophy;