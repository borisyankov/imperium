import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';
import * as E from '../../effects';

const hibernia: Card = {
  cardName: 'Hibernia',
  icon: Icon.PINNED,
  regionType: [RegionType.FERTILE],
  effect: [E.MAY_DRAW_DISCARD, E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.CELTS,
  cardNumber: '1CEL12/28',
  startingLocation: StartingLocation.NATION,
};

export default hibernia;