import { Card, State } from '../types';

const conquer: Card = {
  cardName: 'Conquer',
  state: State.BARBARIAN,
  effect: 'Choose: pay 2 {population} to acquire {region} / {tributary} OR pay 3 {population} to break through for {region} / {tributary}.'
};

export default conquer;