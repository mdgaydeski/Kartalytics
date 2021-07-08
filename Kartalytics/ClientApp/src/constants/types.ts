export type Player = {
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