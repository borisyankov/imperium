import { Card, Nation, StartingLocation } from '../../types';

const alexander: Card = {
  cardName: 'Alexander',
  effect: 'Draw a card. You MAY break through for {region} / {tributary}. Put this card in your history.',
  nation: Nation.MACEDONIANS,
  startingLocation: StartingLocation.ACCESSION,
  cardNumber: '1MAC2/23',
};

export default alexander;