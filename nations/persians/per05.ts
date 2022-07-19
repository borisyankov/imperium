import { Card, State, Nation, StartingLocation, Icon } from '../../types';

const windmills: Card = {
  cardName: 'Windmills',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Free play. Exhaust: treat 1 {fertility} as 3 {river} for the rest of the turn.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER5/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 4 },
  vp: 2,
};

export default windmills;