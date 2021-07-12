import { createContext } from 'react';
import { Cup, Match, Player, Result, Tournament, Track } from '../constants/types';

type ContextType = {
    cupList: Cup[]
    matchList: Match[];
    playerList: Player[];
    resultList: Result[];
    tournamentList: Tournament[];
    trackList: Track[];
}

const AppContext = createContext<ContextType>({
    cupList: [],
    matchList: [],
    playerList: [],
    resultList: [],
    tournamentList: [],
    trackList: []
});

export default AppContext;