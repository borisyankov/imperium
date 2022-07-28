import { Card, Icon, Nation, RegionType, StartingLocation, State, Suit } from '../../types';

const iceland: Card = {
  cardName: 'Iceland',
  icon: Icon.PINNED,
  state: State.BARBARIAN,
  regionType: [RegionType.PRODUCTION],
  effect: 'You MAY garrison a card. Choose: gain 2 {materials} OR look at the top card of your nation deck, then you MAY shuffle the nation deck.',
  suit: Suit.REGION,
  nation: Nation.VIKINGS,
  cardNumber: '1VIK3/26',
  startingLocation: StartingLocation.NATION,
};

export default iceland;