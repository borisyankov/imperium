import { Card, Icon, Nation, RegionType, Suit } from '../../types';

const peloponnese: Card = {
  cardName: 'Peloponnese',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'Gain 1 {population}. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.GREEKS,
  cardNumber: '1GRE20/23',
};

export default peloponnese;