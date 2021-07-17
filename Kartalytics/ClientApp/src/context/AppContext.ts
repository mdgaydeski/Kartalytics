import { createContext } from 'react';
import { Cup, Match, MatchResult, Player, RaceResult, Tournament, Track } from '../constants/types';

type ContextType = {
    cups: Cup[]
    matches: Match[];
    matchResults: MatchResult[];
    players: Player[];
    raceResults: RaceResult[];
    tournaments: Tournament[];
    tracks: Track[];
}

const AppContext = createContext<ContextType>({
    cups: [],
    matches: [],
    matchResults: [],
    players: [],
    raceResults: [],
    tournaments: [],
    tracks: []
});

export default AppContext;