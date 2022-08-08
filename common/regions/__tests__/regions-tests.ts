import regionCards from '../';
import { Icon, Suit } from '../../../types';

describe('regions', () => {
  test('all regions are Pinned', () => {
    const cardsWithPinnedIcon = regionCards.filter(card => card.icon === Icon.PINNED);
    expect(cardsWithPinnedIcon.length).toEqual(regionCards.length);
  });

  test('all regions have Region suit', () => {
    const cardsWithRegionSuit = regionCards.filter(card => card.suit === Suit.REGION);
    expect(cardsWithRegionSuit.length).toEqual(regionCards.length);
  });
});