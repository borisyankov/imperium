import { Card, Suit, State, Nation, StartingLocation } from '../../types';

const juliusCaesar: Card = {
  cardName: 'Julius Caesar',
  state: State.EMPIRE,
  effect: 'Free play. Choose: draw 2 cards, OR you MAY acquire {region} / {tributary}. Put this card into your history.',
  suit: Suit.POWER, 
  nation: Nation.ROMANS,
  startingLocation: StartingLocation.ACCESSION,
  cardNumber: '1ROM2/23',
};

export default juliusCaesar;