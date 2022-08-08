import cards from '../';
import { Suit } from '../../types';


describe('suits', () => {
  test('there are 14 cards with Region suit', () => {
    const cardsWithRegionSuit = cards.filter(card => card.suit === Suit.REGION);
    expect(cardsWithRegionSuit.length).toEqual(14);
  });

  test('there are no cards with no suit', () => {
    const cardsWithNoSuit = cards.filter(card => card.suit === undefined);
    expect(cardsWithNoSuit.length).toEqual(0);
  });

  test('there are 22 cards with Uncivilised suit', () => {
    const cardsWithUncivilisedSuit = cards.filter(card => card.suit === Suit.UNCIVILISED ||card.suit === Suit.UNCIVILISED_CIVILISED);
    expect(cardsWithUncivilisedSuit.length).toEqual(22);
  });

  test('there are 24 cards with Civilised suit', () => {
    const cardsWithCivilisedSuit = cards.filter(card => card.suit === Suit.CIVILISED ||card.suit === Suit.UNCIVILISED_CIVILISED);
    expect(cardsWithCivilisedSuit.length).toEqual(24);
  });

  test('there are 11 cards with Tributary suit', () => {
    const cardsWithTributarySuit = cards.filter(card => card.suit === Suit.TRIBUTARY);
    expect(cardsWithTributarySuit.length).toEqual(11);
  });

  test('there are 9 cards with Fame suit', () => {
    const cardsWithFameSuit = cards.filter(card => card.suit === Suit.FAME);
    expect(cardsWithFameSuit.length).toEqual(9);
  });

  test('there are 12 cards with Unrest suit', () => {
    const cardsWithUnrestSuit = cards.filter(card => card.suit === Suit.UNREST);
    expect(cardsWithUnrestSuit.length).toEqual(12);
  });
});