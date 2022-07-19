import { Card, State, Nation, StartingLocation, Suit } from '../../types';

const babylonians: Card = {
  cardName: 'Persian Gold',
  state: State.EMPIRE,
  effect: 'Free play. Acquire {uncivilised} / {civilised} / {region} / {tributary}. Put this card into your history.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER8/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { population: 5 },
  suit: Suit.TRIBUTARY, 
  vp: 4,
};

export default babylonians;