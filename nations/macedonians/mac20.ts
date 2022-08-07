import { Card, Icon, Nation, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const pelagonia: Card = {
  cardName: 'Pelagonia',
  icon: Icon.PINNED,
  regionType: [RegionType.FERTILE],
  effect: [E.GAIN({ population: 1 }), E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC20/23',
};

export default pelagonia;