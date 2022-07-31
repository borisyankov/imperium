import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';
import * as E from '../../effects';

const tarimBasin: Card = {
  cardName: 'Tarim Basin',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: [E.MAY_DRAW, E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY11/24',
  startingLocation: StartingLocation.NATION,
};

export default tarimBasin;