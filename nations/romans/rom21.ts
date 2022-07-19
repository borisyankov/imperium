import { Card, Nation, Icon, RegionType, State } from '../../types';

const romanExpansion: Card = {
  cardName: 'Roman Expansion',
  icon: Icon.ATTACK,
  state: State.BARBARIAN,
  regionType: [RegionType.PRODUCTION],
  effect: 'Acquire {region}. You MAY acquire {region} again. Each other player recalls a {region}. Put this card into your history.',
  nation: Nation.ROMANS,
  cardNumber: '1ROM21/23',
};

export default romanExpansion;