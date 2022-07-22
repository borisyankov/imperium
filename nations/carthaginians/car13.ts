import { Card, Nation, StartingLocation, Suit } from '../../types';

const berbers: Card = {
  cardName: 'Berbers',
  effect: 'Gain 2 {population}.',
  nation: Nation.CARTHAGINIANS,
  startingLocation: StartingLocation.NATION,
  suit: Suit.TRIBUTARY,
  cardNumber: '1CAR13/23',
};

export default berbers;