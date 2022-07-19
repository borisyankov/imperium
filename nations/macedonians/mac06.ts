import { Card, Nation, StartingLocation, State } from '../../types';

const alexanderTheGreat: Card = {
  cardName: 'Alexander The Great',
  state: State.EMPIRE,
  effect: 'Cannot be played unless Alexander is in your history. Free play. You MAY acquire {region} twice, including fromm exiled cards. Put this card into your history.',
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC6/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 4, population: 2 },
  vp: 4,
};

export default alexanderTheGreat;