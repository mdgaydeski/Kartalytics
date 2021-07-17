export type MatchResult = {
    playerId: number;
    points: number;
    placeTotals: number[];
    trackResults: {
        trackId: number,
        result: number
    }[];
}

export type Match = {
    id: number;
    name: string;
    trackOrder: number[];
    results: MatchResult[];
}

export type SearchItem = {
    type: string;
    id: number;
    name: string;
    altNames: string[];
}

// database subdocument types

export type PlayerResult = {
    tournamentId: number;
    year: number;
    place: number;
    matches: number[];
}

export type RoundResult = {
    playerId: number;
    seed?: number | undefined;
    totalPoints: number;
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
    isPoolRound?: boolean | undefined;
    totalAdvance?: number | undefined;
    matches: number[];
    results: RoundResult[];
}

// database document types

export type Cup = {
    id: number;
    name: string;
    tracks: number[];
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