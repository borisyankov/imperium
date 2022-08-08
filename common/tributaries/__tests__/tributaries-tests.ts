import triCards from '../';
import { Icon, Suit } from '../../../types';

describe('civilised', () => {
  test('all tributaries have Tributary suit', () => {
    const cardsWithTributarySuit = triCards.filter(card => card.suit === Suit.TRIBUTARY);
    expect(cardsWithTributarySuit.length).toEqual(triCards.length);
  });

  test('there are 2 tributaries with Pinned icon', () => {
    const cardsWithPinnedIcon = triCards.filter(card => card.icon === Icon.PINNED);
    expect(cardsWithPinnedIcon.length).toEqual(2);
  });
});