export type PlayerResult = {
    tournamentId: number;
    place: number;
}

export type Player = {
    id: number;
    name: string;
    country: string;
    tournamentResults: PlayerResult[];
}

export type Result = {
    playerId: number;
    trackId: number;
    result: number;
    year: number;
}

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

export type TournamentResult = {
    playerId: number;
    place: number;
}

export type TournamentRound = {
    orderNumber: number;
    name: string;
    totalAdvance: number;
    isPoolRound: boolean;
    roundSummary: {
        playerId: number;
        points: number;
        matches: number[];
    }[];
    matches: number[];
}

export type Tournament = {
    _id: number;
    name: string;
    altNames: string[];
    group: string;
    location: string;
    start_date: string;
    end_date: string;
    finalResults: TournamentResult[];
    rounds: TournamentRound[];
}

export type Track = {
    id: number;
    name: string;
    altNames: string[];
    cupId: number;
}

export type Cup = {
    id: number;
    name: string;
    tracks: number[];
}