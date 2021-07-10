﻿export type Player = {
    id: number;
    name: string;
    country: string;
    results: number[];
}

export type Match = {
    name: string;
    trackOrder: number[];
    players: Player[];
}

export type TournamentResult = {
    playerId: number;
    place: number;
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
    rounds: {
        orderNumber: number;
        name: string;
        totalAdvance: number;
        roundTotals: {
            playerId: number;
            points: number;
        }[] | null;
        matches: number[];
    }[]
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