import { Card, Icon, Nation, StartingLocation, State, Suit } from '../../types';

const uxians: Card = {
  cardName: 'Uxians',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'Steal 2 {materials} from each other player. You MAY return an {exhaust} to your state card.',
  suit: Suit.TRIBUTARY,
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC11/23',
  startingLocation: StartingLocation.NATION,
};

export default uxians;