import { Card, Nation, StartingLocation } from '../../types';

const jewellery: Card = {
  cardName: 'Jewellery',
  effect: 'Cannot be played. Cannot be garrisoned.',
  nation: Nation.SCYTHIANS,
  developmentCost: { materials: 7 },
  cardNumber: '1SCY6/24',
  startingLocation: StartingLocation.DEVELOPMENT,
  vp: 7,
};

export default jewellery;