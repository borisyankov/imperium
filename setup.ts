import { MarketBoard, Resources, Suit } from './types';
import * as commonCards from './common';

const board: MarketBoard = {
  commonDeck: [],
  commonRevealed1: [],
  tokensOnCommon1: {},
  commonRevealed2: [],
  civilisedDeck: [],
  civilisedRevealed: [],
  uncivilisedDeck: [],
  uncivilisedRevealed: [],
  regionDeck: [],
  regionRevealed: [],
  fameDeck: [],
  unrestPile: [],
  exiledDeck: [],
}

const shuffle = (deck: any[]) => {
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
};

const playerSetup = () => {
  // nation
  const initialResources: Resources = {
    materials: 3,
    population: 2,
    progress: 1,
  };
}

const boardSetup = (board: MarketBoard) => {
  // filter out 3 player and 4 player cards
  // board.fameDeck = commonCards.filter(card => card.suit === Suit.FAME);
}


console.log(commonCards);
