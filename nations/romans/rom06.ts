import { Card, State, Nation, StartingLocation } from '../../types';

const theSenate: Card = {
  cardName: 'The Senate',
  state: State.EMPIRE,
  effect: 'You MAY acquire {civilised}. You MAY put a card from your hand into your history.',
  nation: Nation.ROMANS,
  cardNumber: '1ROM6/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 4 },
  vp: 3,
};

export default theSenate;