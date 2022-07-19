import { Card, Nation, StartingLocation } from '../../types';
import city from '../../common/uncivilised/unc15';

const cityOfPersepolis: Card = {
  ...city,
  cardName: 'City Of Persepolis',
  nation: Nation.PERSIANS,
  cardNumber: '1PER2/23',
  startingLocation: StartingLocation.ACCESSION,
};

export default cityOfPersepolis;