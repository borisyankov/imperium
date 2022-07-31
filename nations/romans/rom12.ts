import { Card, Nation, StartingLocation, Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const raetia: Card = {
  cardName: 'Raetia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: [E.GAIN_1_M, E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.ROMANS,
  cardNumber: '1ROM12/23',
  startingLocation: StartingLocation.NATION,
};

export default raetia;