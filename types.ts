export enum Icon {PINNED, ATTACK};
export enum State {BARBARIAN, EMPIRE};
export enum CardType{CITY,METROPOLIS, KNIGHT, MASK};
export enum RegionType { PRODUCTION, FERTILE, RIVER }; // https://boardgamegeek.com/thread/2775554/region-type
export enum Suit {POWER, REGION, UNCIVILISED, CIVILISED, UNCIVILISED_CIVILISED, TRIBUTARY, FAME, UNREST};
export enum Nation {CARTHAGINIANS, CELTS, GREEKS, MACEDONIANS, PERSIANS, ROMANS, SCYTHIANS, VIKINGS, ARTHURIANS, ATLANTEANS, EGYPTIANS, MAURYANS, MINOANS, OLMECS, QIN, UTOPIAN};
export enum StartingLocation {IN_PLAY, NATION, ACCESSION, DEVELOPMENT, SUPPLY};

export type Card = {
  cardName: string,
  icon?: Icon,
  state?: State,
  cardType?: CardType[],
  regionType?: RegionType[],
  effect: string,
  developmentCost?: Resources,
  suit?: Suit, 
  nation?: Nation,
  cardNumber: string;
  startingLocation?: StartingLocation,
  vp?: number | string,
}

export type Resources = { materials?: number, population?: number, progress?: number };

export type BotCardIcon = string | Suit | State | Icon;
export type BotRow = [BotCardIcon, string];
export type BotTable = BotRow[];

export type MarketBoard = {
  commonDeck: Card[],
  commonRevealed1: Card[],
  tokensOnCommon1: Resources;
  commonRevealed2: Card[],
  civilisedDeck: Card[],
  civilisedRevealed: Card[],
  uncivilisedDeck: Card[],
  uncivilisedRevealed: Card[],
  regionDeck: Card[],
  regionRevealed: Card[],
  fameDeck: Card[],
  unrestPile: Card[],
  exiledDeck: Card[],
}
