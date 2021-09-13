// database subdocument types

export interface MatchRaceResult {
    trackId: number;
    place: number;
}

export interface MatchVideo {
    host: string;
    url: string;
}

export interface PlayerCompare {
    id: number;
    name: string;
}

export interface PlayerResult {
    tournamentId: number;
    year: number;
    place: number;
    matches: number[];
}

export interface RoundResult {
    playerId: number;
    seed?: number;
    points: number[];
    place: number;
}

export interface TournamentResult {
    playerId: number;
    place: number;
}

export interface TournamentRound {
    roundNumber: number;
    roundLevel: string;
    name: string;
    isPoolRound?: boolean;
    totalAdvance?: number;
    matches: number[];
    results: RoundResult[];
}

// database document types

export interface Cup {
    id: number;
    name: string;
    tracks: number[];
}

export interface Match {
    id: number;
    name: string;
    cupOrder?: number[];
    trackOrder?: number[];
    results: number[];
    videos: MatchVideo[];
}

export interface MatchResult {
    id: number;
    playerId: number;
    tournamentId: number;
    points: number;
    place: number;
    placeTotals: number[];
    raceResults: MatchRaceResult[];
}

export interface Player extends PlayerCollectionType {
    tournamentResults: PlayerResult[];
}

export interface RaceResult {
    playerId: number;
    trackId: number;
    year: number;
    place: number;
}

export interface Tournament extends TournamentCollectionType {
    rounds: TournamentRound[];
}

export interface Track {
    id: number;
    name: string;
    altNames: string[];
}

// collection types

export interface PlayerCollectionType extends ContextObject {
    country: string;
}

export interface TournamentCollectionType extends ContextObject {
    group: string;
    location: string;
    startDate: string;
    endDate: string;
    results: TournamentResult[];
}

// helper types

export interface ContextObject {
    id: number;
    name: string;
    altNames?: string[];
    trackList?: number[];
}

export interface PlayerOverviewFilterSet {
    readonly [key: string]: any;
    startYear: number;
    endYear: number;
}

export interface SearchItem extends ContextObject {
    type: string;
}

export interface TournamentContextObject extends ContextObject {
    totalPlayers: number;
}

export interface TrackStatsColumnType {
    label: string;
    labelAbbr?: string;
    className: string;
    invertSort?: boolean;
    property: string;
    index?: number;
}

export interface TrackStatsFilterSet {
    readonly [key: string]: any;
    startYear: number;
    endYear: number;
    minimumResults: number;
    showAverageFinish: boolean;
    sortedColumn: number;
    sortAscending: boolean;
}

export type TrackStatsRowType = {
    readonly [key: string]: any;
    assetId: number;
    assetName: string;
    assetType: string;
    totalRaces: number;
    placeTotals: number[];
    averageFinish: number;
}