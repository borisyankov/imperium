import { Card, Nation, StartingLocation, Suit, State } from '../../types';

const medianEmpire: Card = {
  cardName: 'Nisaean Plain',
  state: State.BARBARIAN,
  effect: 'Gain 4 {materials}. Put this card into your history.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER12/23',
  startingLocation: StartingLocation.NATION,
  suit: Suit.TRIBUTARY,
};

export default medianEmpire;