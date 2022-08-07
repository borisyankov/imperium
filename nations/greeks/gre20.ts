import { Card, Icon, Nation, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const peloponnese: Card = {
  cardName: 'Peloponnese',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: [E.GAIN({ population: 1 }), E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.GREEKS,
  cardNumber: '1GRE20/23',
};

export default peloponnese;