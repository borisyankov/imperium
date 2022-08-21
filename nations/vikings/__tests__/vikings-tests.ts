import cards from '..';
import { Icon, StartingLocation, State, Suit } from '../../../types';

describe('Vikings', () => {
  test('there are 26 Vikings cards', () => {
    expect(cards.length).toEqual(26);
  });

  test('there are 13 cards with no icon', () => {
    const cardsWithNoIcon = cards.filter(card => card.icon === undefined);
    expect(cardsWithNoIcon.length).toEqual(13);
  });

  test('there are 10 cards with Pinned icon', () => {
    const cardsWithPinnedIcon = cards.filter(card => card.icon === Icon.PINNED);
    expect(cardsWithPinnedIcon.length).toEqual(10);
  });

  test('there are 3 cards with Attack icon', () => {
    const cardsWithAttackIcon = cards.filter(card => card.icon === Icon.ATTACK);
    expect(cardsWithAttackIcon.length).toEqual(3);
  });

  test('there are 5 cards with Region suit', () => {
    const cardsWithRegionSuit = cards.filter(card => card.suit === Suit.REGION);
    expect(cardsWithRegionSuit.length).toEqual(5);
  });

  test('there are 15 cards with no suit', () => {
    const cardsWithNoSuit = cards.filter(card => card.suit === undefined);
    expect(cardsWithNoSuit.length).toEqual(15);
  });

  test('there are 5 cards with Unrest suit', () => {
    const cardsWithUnrestSuit = cards.filter(card => card.suit === Suit.UNREST);
    expect(cardsWithUnrestSuit.length).toEqual(5);
  });

  test('there are 8 cards with no state', () => {
    const cardsWithNoState = cards.filter(card => card.state === undefined);
    expect(cardsWithNoState.length).toEqual(8);
  });

  test('there are 18 cards with Barbarian state', () => {
    const cardsWithBarbarianState = cards.filter(card => card.state === State.BARBARIAN);
    expect(cardsWithBarbarianState.length).toEqual(18);
  });

  test('there are no cards with Empire state', () => {
    const cardsWithEmpireState = cards.filter(card => card.state === State.EMPIRE);
    expect(cardsWithEmpireState.length).toEqual(0);
  });

  test('there are 9 cards in player deck', () => {
    const cardsWithEmpireState = cards.filter(card => card.startingLocation === undefined);
    expect(cardsWithEmpireState.length).toEqual(9);
  });

  test('there are 13 cards in Nation deck', () => {
    const cardsWithEmpireState = cards.filter(card => card.startingLocation === StartingLocation.NATION);
    expect(cardsWithEmpireState.length).toEqual(13);
  });

  test('there are no cards in Development deck', () => {
    const cardsWithEmpireState = cards.filter(card => card.startingLocation === StartingLocation.DEVELOPMENT);
    expect(cardsWithEmpireState.length).toEqual(0);
  });

  test('there are 2 cards in Supply', () => {
    const cardsWithEmpireState = cards.filter(card => card.startingLocation === StartingLocation.SUPPLY);
    expect(cardsWithEmpireState.length).toEqual(2);
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