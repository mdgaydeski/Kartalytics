// database subdocument types

export type MatchRaceResult = {
    trackId: number,
    place: number
}

export type MatchVideo = {
    host: string;
    url: string;
}

export type PlayerCompare = {
    id: number;
    name: string;
}

export type PlayerResult = {
    tournamentId: number;
    year: number;
    place: number;
    matches: number[];
}

export type RoundResult = {
    playerId: number;
    seed?: number;
    points: number[];
    place: number;
}

export type TournamentResult = {
    playerId: number;
    place: number;
}

export type TournamentRound = {
    roundNumber: number;
    roundLevel: string;
    name: string;
    isPoolRound?: boolean;
    totalAdvance?: number;
    matches: number[];
    results: RoundResult[];
}

// database document types

export type Cup = {
    id: number;
    name: string;
    tracks: number[];
}

export type Match = {
    id: number;
    name: string;
    cupOrder?: number[];
    trackOrder?: number[];
    results: number[];
    videos: MatchVideo[];
}

export type MatchResult = {
    id: number;
    playerId: number;
    tournamentId: number;
    points: number;
    place: number;
    placeTotals: number[];
    raceResults: MatchRaceResult[];
}

export type Player = {
    id: number;
    name: string;
    country: string;
    tournamentResults: PlayerResult[];
}

export type RaceResult = {
    playerId: number;
    trackId: number;
    year: number;
    place: number;
}

export type Tournament = {
    id: number;
    name: string;
    altNames: string[];
    group: string;
    location: string;
    startDate: string;
    endDate: string;
    results: TournamentResult[];
    rounds: TournamentRound[];
}

export type Track = {
    id: number;
    name: string;
    altNames: string[];
}

// helper types

export type FilterSet = {
    readonly [key: string]: any;
    startYear: number;
    endYear: number;
    minimumResults: number;
    showAverageFinish: boolean;
    sortedColumn: number;
    sortAscending: boolean;
}

export type SearchItem = {
    type: string;
    id: number;
    name: string;
    altNames: string[];
}

export type TrackStatsColumnType = {
    label: string;
    className: string;
    invertSort?: boolean;
    property: string;
    index?: number;
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