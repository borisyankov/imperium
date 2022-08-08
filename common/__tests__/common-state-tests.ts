import cards from '../';
import { State } from '../../types';
import { TOTAL_CARD_COUNT } from './common-tests';

describe('state', () => {
  test('there are 61 cards with no state', () => {
    const cardsWithNoState = cards.filter(card => card.state === undefined);
    expect(cardsWithNoState.length).toEqual(TOTAL_CARD_COUNT - 7 - 15);
  });

  test('there are 7 cards with Barbarian state', () => {
    const cardsWithBarbarianState = cards.filter(card => card.state === State.BARBARIAN);
    expect(cardsWithBarbarianState.length).toEqual(7);
  });

  test('there are 15 cards with Empire state', () => {
    const cardsWithEmpireState = cards.filter(card => card.state === State.EMPIRE);
    expect(cardsWithEmpireState.length).toEqual(15);
  });
});