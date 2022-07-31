import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';
import * as E from '../../effects';

const plainsOfThessaly: Card = {
  cardName: 'Plains of Thessaly',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: [E.GAIN_1_M, E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.GREEKS,
  cardNumber: '1GRE12/23',
  startingLocation: StartingLocation.NATION,
};

export default plainsOfThessaly;