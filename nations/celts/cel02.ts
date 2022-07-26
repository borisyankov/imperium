import { Card, Nation, StartingLocation } from '../../types';

const celticGold: Card = {
  cardName: 'Celtic Gold',
  effect: 'Each other player gains 1 {materials}. Gain 4 {materials}. per {fertility} in your play area.',
  nation: Nation.CELTS,
  startingLocation: StartingLocation.ACCESSION,
  cardNumber: '1CEL2/28',
};

export default celticGold;