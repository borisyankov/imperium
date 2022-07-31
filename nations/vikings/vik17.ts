import { Card, Icon, Nation, RegionType, State, Suit } from '../../types';
import * as E from '../../effects';

const scandinavia: Card = {
  cardName: 'Scandinavia',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  regionType: [RegionType.PRODUCTION],
  effect: E.GARRISON,
  suit: Suit.REGION,
  nation: Nation.VIKINGS,
  cardNumber: '1VIK17/26',
};

export default scandinavia;