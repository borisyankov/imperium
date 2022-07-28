import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const longships: Card = {
  cardName: 'Longships',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  effect: 'Passive: you can acquire exiled {region} cards. When you do, gain 1 {population}. Exhaust: when you play an {attack}, exhaust this card to gain 2 {materials}.',
  nation: Nation.VIKINGS,
  startingLocation: StartingLocation.NATION,
  cardNumber: '1VIK10/26',
};

export default longships;