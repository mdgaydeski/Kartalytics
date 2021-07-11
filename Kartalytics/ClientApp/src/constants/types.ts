export type Player = {
    id: number;
    name: string;
    country: string;
    results: number[];
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
    roundTotals: {
        playerId: number;
        points: number;
    }[] | null;
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
    cup: string;
}

export type Cup = {
    name: string;
    tracks: Track[];
}