import { Card, Icon, Nation, RegionType, State, Suit } from '../../types';

const scandinavia: Card = {
  cardName: 'Scandinavia',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  regionType: [RegionType.PRODUCTION],
  effect: 'You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.VIKINGS,
  cardNumber: '1VIK17/26',
};

export default scandinavia;