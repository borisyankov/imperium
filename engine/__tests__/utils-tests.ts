import { Card } from '../../types';
import { filterCards, shuffle } from '../utils';

describe('shuffle', () => {
  test('works on empty arrays', () => {
    const emptyDeck: string[] = [];
    shuffle(emptyDeck);
    expect(emptyDeck).toEqual([]);
  });

  test('shuffles an array of objects', () => {
    const originalDeck = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const deck = shuffle(originalDeck);
    expect(deck.length).toEqual(originalDeck.length);
    expect(deck).not.toEqual(originalDeck);
  });
});

describe('filterCards', () => {
  test('works on empty arrays', () => {
    const emptyDeck: Card[] = [];
    const result = filterCards(emptyDeck, 3);
    expect(result).toEqual([]);
  });

  test('what', () => {
    // @ts-expect-error: Card objects are incomplete
    const deck: Card[] = [{}, {}, { playerCount: 3 }, { playerCount: 4 }];
    const result = filterCards(deck, 3);
    expect(result).not.toEqual(deck);
  });
});