export enum Icon { PINNED, ATTACK }
export enum State { BARBARIAN, EMPIRE }
export enum CardType{ CITY, METROPOLIS, SCROLL, MASK, KNIGHT }
export enum RegionType { PRODUCTION, FERTILE, RIVER } // https://boardgamegeek.com/thread/2775554/region-type
export enum Suit { POWER, REGION, UNCIVILISED, CIVILISED, UNCIVILISED_CIVILISED, TRIBUTARY, FAME, UNREST }
export enum Nation { CARTHAGINIANS, CELTS, GREEKS, MACEDONIANS, PERSIANS, ROMANS, SCYTHIANS, VIKINGS, ARTHURIANS, ATLANTEANS, EGYPTIANS, MAURYANS, MINOANS, OLMECS, QIN, UTOPIAN }
export enum StartingLocation {IN_PLAY, NATION, ACCESSION, DEVELOPMENT, SUPPLY }

export type Effect = string | string[];


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

export type BotCardIcon = string | Suit | State | Icon;
export type BotRow = { if: BotCardIcon, then: Effect };
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
