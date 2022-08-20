import { MarketBoard, Suit } from '../types';
import { drawCardWithUnrest, filterCards, shuffle, takeCards } from './utils';
import civilisedCards from '../common/civilised';
import uncivilisedCards from '../common/uncivilised';
import regionCards from '../common/regions';
import tributaryCards from '../common/tributaries';
import fameCards from '../common/fame';
import unrestCards from '../common/unrest/';

export const marketBoardSetup = (playerCount: number): MarketBoard => {
  // Sort all the commons cards by suit: , , , , , and . These can also be distinguished by the colour of their banner.
  // all civ_unciv count as unciv for setup purposes
  // remove common cards that have +3 or +4 (according to player count)
  // prepare unrest pile

  // Shuffle the {region} cards. Place six of them in a face-down deck, above the icon on the market board. This is the region deck.
  // uncivilised
  // civilised

  const readyCivilisedCards = shuffle(filterCards(civilisedCards, playerCount));
  const civilisedDeck = takeCards(readyCivilisedCards, 6);
  const readyUncivilisedCards = shuffle(filterCards(uncivilisedCards, playerCount));
  const uncivilisedDeck = takeCards(readyUncivilisedCards, 6);
  const readyRegionCards = shuffle(filterCards(regionCards, playerCount));
  const regionDeck = takeCards(readyRegionCards, 6);
  const readyTributaryCards = shuffle(filterCards(tributaryCards, playerCount));
  const fameDeck = filterCards(fameCards, playerCount);
  const unrestPile = filterCards(unrestCards, playerCount);

  // fame deck: King of Kings on side A, remove from game 0, 1, or 2 cards randomly
  
  // Suffle all remaining {uncivilised} / {civilised} / {region} / {tributary} to create main deck
  const mainDeck = shuffle([...readyCivilisedCards, ...readyUncivilisedCards,  ...readyRegionCards, ...readyTributaryCards]);

  const mainRevealed1 = drawCardWithUnrest(mainDeck, unrestPile);
  const mainRevealed2 = drawCardWithUnrest(mainDeck, unrestPile);
  const civilisedRevealed = drawCardWithUnrest(civilisedDeck, unrestPile);
  const uncivilisedRevealed = drawCardWithUnrest(uncivilisedDeck, unrestPile);
  const regionRevealed = drawCardWithUnrest(regionDeck, unrestPile);
  // Draw one card from each deck (draw FUNC)
  // Tuck a card from unrest pile underneath unciv / civ / trib 
  // drawCardFromDeckIntoBoard(deck: Cards[], boardDeck[]);

  // place a progress token on CIV cards 
  // decide starting player
  return {
    mainDeck,
    mainRevealed1,
    tokensOnMain1: mainRevealed1[0].suit == Suit.CIVILISED ? { progress: 1 } : {},
    mainRevealed2,
    tokensOnMain2: mainRevealed2[0].suit == Suit.CIVILISED ? { progress: 1 } : {},
    civilisedDeck,
    civilisedRevealed,
    tokensOnCivilised: { progress: 1 },
    uncivilisedDeck,
    uncivilisedRevealed,
    tokensOnUncivilised: {},
    regionDeck,
    regionRevealed,
    tokensOnRegion: {},
    fameDeck,
    unrestPile,
    exiledDeck: [],
  }
}
