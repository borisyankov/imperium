import { Card, Nation, StartingLocation, State } from '../../types';
import city from '../../common/city';

const cityOfGelonus: Card = {
  ...city,
  state: State.EMPIRE,
  cardName: 'City Of Gelonus',
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY5/24',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { population: 3 },
  vp: 2,
};

export default cityOfGelonus;