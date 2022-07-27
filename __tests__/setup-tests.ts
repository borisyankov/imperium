import { shuffle } from '../setup';

describe('shuffle', () => {
  test('works on empty arrays', () => {
    const emptyDeck: string[] = [];
    shuffle(emptyDeck);
    expect(emptyDeck).toEqual([]);
  });
  test('shuffles an array of objects', () => {
    const originalDeck = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const deck = [...originalDeck];
    shuffle(deck);
    expect(deck).not.toEqual(originalDeck);
  });
});