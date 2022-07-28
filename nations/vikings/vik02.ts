import { Card, Nation, StartingLocation, State } from '../../types';

const haraldHardrada: Card = {
  cardName: 'Harald Hardrada',
  state: State.BARBARIAN,
  effect: 'TAKING THIS CARD TRIGGERS THE GAME END. Take the top {fame} card. You may break through for {region}.',
  nation: Nation.VIKINGS,
  cardNumber: '1VIK2/26',
  startingLocation: StartingLocation.ACCESSION,
  vp: '2 VP per {*} card'
};

export default haraldHardrada;