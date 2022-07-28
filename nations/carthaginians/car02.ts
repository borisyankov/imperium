import { Card, Nation, StartingLocation } from '../../types';
import city from '../../common/city';

const cityOfCarthage: Card = {
  ...city,
  cardName: 'City Of Carthage',
  nation: Nation.CARTHAGINIANS,
  cardNumber: '1CAR2/23',
  startingLocation: StartingLocation.ACCESSION,
};

export default cityOfCarthage;