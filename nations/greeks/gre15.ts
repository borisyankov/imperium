import { Card, Icon, Nation } from '../../types';

const greekMercenaries: Card = {
  cardName: 'Greek Mercenaries',
  icon: Icon.ATTACK,
  effect: 'Gain 1 {PROGRESS}. Draw a card. Steal 2 {materials} from each other player. Each other player gains 1 {population}.',
  nation: Nation.GREEKS,
  cardNumber: '1GRE15/23',
};

export default greekMercenaries;