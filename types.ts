export enum Icon { PINNED, ATTACK }
export enum State { BARBARIAN, EMPIRE }
export enum CardType{ CITY, METROPOLIS, SCROLL, MASK, KNIGHT }
export enum RegionType { PRODUCTION, FERTILE, RIVER } // https://boardgamegeek.com/thread/2775554/region-type
export enum Suit { POWER, REGION, UNCIVILISED, CIVILISED, UNCIVILISED_CIVILISED, TRIBUTARY, FAME, UNREST }
export enum Nation { CARTHAGINIANS, CELTS, GREEKS, MACEDONIANS, PERSIANS, ROMANS, SCYTHIANS, VIKINGS, ARTHURIANS, ATLANTEANS, EGYPTIANS, MAURYANS, MINOANS, OLMECS, QIN, UTOPIAN }
export enum StartingLocation {IN_PLAY, NATION, ACCESSION, DEVELOPMENT, SUPPLY }

export type Effect = string | string[] | Effect[];


export type Card = {
  cardName: string,
  icon?: Icon,
  state?: State,
  cardType?: CardType[],
  regionType?: RegionType[],
  effect: Effect,
  developmentCost?: Resources,
  suit?: Suit, 
  nation?: Nation,
  cardNumber?: `${1|2}${'CIV'|'FAM'|'REG'|'TRI'|'UNC'|'UNR'|'CAR'|'CEL'|'GRE'|'MAC'|'PER'|'ROM'|'SCY'|'VIK'}${number}${''|'A'|'B'}/${number}`,
  startingLocation?: StartingLocation,
  playerCount?: 3 | 4,
  vp?: number | string,
}

export type Resources = { materials?: number, population?: number, progress?: number };

export type BotCardIcon = 'Conquer' | 'Advance' | 'Prosperity' | 'Glory' | 'Other' | Suit | State | Icon;
export type BotRow = { if: BotCardIcon, then: Effect };
export type BotTable = BotRow[];

export type MarketBoard = {
  mainDeck: Card[],
  mainRevealed1: Card[],
  tokensOnMain1: Resources;
  mainRevealed2: Card[],
  tokensOnMain2: Resources;
  civilisedDeck: Card[],
  civilisedRevealed: Card[],
  tokensOnCivilised: Resources;
  uncivilisedDeck: Card[],
  uncivilisedRevealed: Card[],
  tokensOnUncivilised: Resources;
  regionDeck: Card[],
  regionRevealed: Card[],
  tokensOnRegion: Resources;
  fameDeck: Card[],
  unrestPile: Card[],
  exiledDeck: Card[],
}

export type Player = {
  nation: Nation;
  state: State;
  resources: Resources;
}

export type Game = {
  marketBoard: MarketBoard;
  players: Player[];
}