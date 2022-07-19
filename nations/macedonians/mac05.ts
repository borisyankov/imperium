import { Card, Nation, StartingLocation, State, Icon } from '../../types';

const companionCavalry: Card = {
  cardName: 'Companion Cavalry',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Passive: your Conquer cards lose the {barbarian} icon. Exhaust: when you play a {region}, exhaust this card to draw a card.',
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC5/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { population: 3 },
  vp: 3,
};

export default companionCavalry;