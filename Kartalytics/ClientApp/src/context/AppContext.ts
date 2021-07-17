import { createContext } from 'react';
import { Cup, Match, Player, RaceResult, Tournament, Track } from '../constants/types';

type ContextType = {
    cups: Cup[]
    matches: Match[];
    players: Player[];
    raceResults: RaceResult[];
    tournaments: Tournament[];
    tracks: Track[];
}

const AppContext = createContext<ContextType>({
    cups: [],
    matches: [],
    players: [],
    raceResults: [],
    tournaments: [],
    tracks: []
});

export default AppContext;