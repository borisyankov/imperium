import { Card, Icon, Nation, State } from '../../types';

const tents: Card = {
  cardName: 'Tents',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: 'Exhaust: When you pay a {region}, exhaust this card to gain 1 {population}. Solstice: you MAY recall a {region}.',
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY21/24',
};

export default tents;