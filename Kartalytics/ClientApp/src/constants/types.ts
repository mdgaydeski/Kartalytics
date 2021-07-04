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