import uncivCards from '../';
import { Icon, State, Suit } from '../../../types';

describe('uncivilised', () => {
  test('there are 5 cards with Barbarian state', () => {
    const cardsWithBarbarianState = uncivCards.filter(card => card.state === State.BARBARIAN);
    expect(cardsWithBarbarianState.length).toEqual(5);
  });

  test('there are 13 uncivilised with Uncivilised suit', () => {
    const cardsWithUncivilisedSuit = uncivCards.filter(card => card.suit === Suit.UNCIVILISED);
    expect(cardsWithUncivilisedSuit.length).toEqual(13);
  });

  test('there are 9 uncivilised with Civilised suit', () => {
    const cardsWithUncivilisedSuit = uncivCards.filter(card => card.suit === Suit.UNCIVILISED_CIVILISED);
    expect(cardsWithUncivilisedSuit.length).toEqual(9);
  });

  test('there are 13 uncivilised with Pinned icon', () => {
    const cardsWithPinnedIcon = uncivCards.filter(card => card.icon === Icon.PINNED);
    expect(cardsWithPinnedIcon.length).toEqual(13);
  });

  test('there are is one uncivilised with Attack icon', () => {
    const cardsWithAttackIcon = uncivCards.filter(card => card.icon === Icon.ATTACK);
    expect(cardsWithAttackIcon.length).toEqual(1);
  });
});