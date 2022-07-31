import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';
import * as E from '../../effects';

const caucasia: Card = {
  cardName: 'Caucasia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: [E.GAIN_1_P, E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY12/24',
  startingLocation: StartingLocation.NATION,
};

export default caucasia;