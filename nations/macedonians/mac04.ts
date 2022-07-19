import { Card, Nation, StartingLocation, State } from '../../types';

const parmenion: Card = {
  cardName: 'Parmenion',
  state: State.EMPIRE,
  effect: 'Choose: develop OR pay 2 {materials} to acquire {uncivilised} / {civilised}.',
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC4/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 2, population: 2 },
  vp: 2,
};

export default parmenion;