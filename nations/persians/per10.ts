import { Card, Nation, RegionType, StartingLocation, Icon, Suit } from '../../types';
import * as E from '../../effects';

const arachosia: Card = {
  cardName: 'Arachosia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: [E.DISCARD_TO_HISTORY, E.GARRISON],
  nation: Nation.PERSIANS,
  cardNumber: '1PER10/23',
  startingLocation: StartingLocation.NATION,
  suit: Suit.REGION,
};

export default arachosia;