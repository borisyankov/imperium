import cards from '..';
import { Icon, StartingLocation, State, Suit } from '../../../types';

describe('Persians', () => {
  test('there are 23 Greek cards', () => {
    expect(cards.length).toEqual(23);
  });

  test('there are 15 cards with no icon', () => {
    const cardsWithNoIcon = cards.filter(card => card.icon === undefined);
    expect(cardsWithNoIcon.length).toEqual(15);
  });

  test('there are 6 cards with Pinned icon', () => {
    const cardsWithPinnedIcon = cards.filter(card => card.icon === Icon.PINNED);
    expect(cardsWithPinnedIcon.length).toEqual(6);
  });

  test('there are 2 cards with Attack icon', () => {
    const cardsWithAttackIcon = cards.filter(card => card.icon === Icon.ATTACK);
    expect(cardsWithAttackIcon.length).toEqual(2);
  });

  test('there are 4 cards with Region suit', () => {
    const cardsWithRegionSuit = cards.filter(card => card.suit === Suit.REGION);
    expect(cardsWithRegionSuit.length).toEqual(4);
  });

  test('there is are 3 cards with Tributary suit', () => {
    const cardsWithRegionSuit = cards.filter(card => card.suit === Suit.TRIBUTARY);
    expect(cardsWithRegionSuit.length).toEqual(3);
  });

  test('there are 12 cards with no suit', () => {
    const cardsWithNoSuit = cards.filter(card => card.suit === undefined);
    expect(cardsWithNoSuit.length).toEqual(12);
  });

  test('there are 3 cards with Unrest suit', () => {
    const cardsWithUnrestSuit = cards.filter(card => card.suit === Suit.UNREST);
    expect(cardsWithUnrestSuit.length).toEqual(3);
  });

  test('there are 11 cards with no state', () => {
    const cardsWithNoState = cards.filter(card => card.state === undefined);
    expect(cardsWithNoState.length).toEqual(11);
  });

  test('there are 5 cards with Barbarian state', () => {
    const cardsWithBarbarianState = cards.filter(card => card.state === State.BARBARIAN);
    expect(cardsWithBarbarianState.length).toEqual(5);
  });

  test('there are 7 cards with Empire state', () => {
    const cardsWithEmpireState = cards.filter(card => card.state === State.EMPIRE);
    expect(cardsWithEmpireState.length).toEqual(7);
  });

  test('there are 10 cards in player deck', () => {
    const cardsWithEmpireState = cards.filter(card => card.startingLocation === undefined);
    expect(cardsWithEmpireState.length).toEqual(10);
  });

  test('there are 4 cards in Nation deck', () => {
    const cardsWithEmpireState = cards.filter(card => card.startingLocation === StartingLocation.NATION);
    expect(cardsWithEmpireState.length).toEqual(4);
  });

  test('there are 7 cards in Development deck', () => {
    const cardsWithEmpireState = cards.filter(card => card.startingLocation === StartingLocation.DEVELOPMENT);
    expect(cardsWithEmpireState.length).toEqual(7);
  });

  test('there in one Accession card', () => {
    const cardsWithEmpireState = cards.filter(card => card.startingLocation === StartingLocation.ACCESSION);
    expect(cardsWithEmpireState.length).toEqual(1);
  });

  test('there in one card in play', () => {
    const cardsWithEmpireState = cards.filter(card => card.startingLocation === StartingLocation.IN_PLAY);
    expect(cardsWithEmpireState.length).toEqual(1);
  });
});