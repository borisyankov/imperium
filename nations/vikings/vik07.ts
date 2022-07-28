import { Card, Icon, Nation, RegionType, StartingLocation, State, Suit } from '../../types';

const vinland: Card = {
  cardName: 'Vinland',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER, RegionType.FERTILE],
  effect: 'Cannot be played unless both Longships and Graenland are in play. Choose: return an {unrest} OR you MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.VIKINGS,
  cardNumber: '1VIK7/26',
  startingLocation: StartingLocation.NATION,
  vp: '6 VP if in play',
};

export default vinland;