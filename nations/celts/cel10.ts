import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';
import * as E from '../../effects';

const belgica: Card = {
  cardName: 'Belgica',
  icon: Icon.PINNED,
  regionType: [RegionType.RIVER],
  effect: [E.MAY_DRAW, E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.CELTS,
  cardNumber: '1CEL10/28',
  startingLocation: StartingLocation.NATION,
};

export default belgica;