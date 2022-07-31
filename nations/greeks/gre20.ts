import { Card, Icon, Nation, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const peloponnese: Card = {
  cardName: 'Peloponnese',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: [E.GAIN_1_P, E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.GREEKS,
  cardNumber: '1GRE20/23',
};

export default peloponnese;