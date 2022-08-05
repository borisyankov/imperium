import { Card } from '../types';
import * as E from '../effects';

const glory: Card = {
  cardName: 'Glory',
  effect: [E.CANNOT_GARRISON, 'Abandon 3 {region} cards to look at the top 2 cards of the {fame} deck. Take one of those cards.'],
};

export default glory;