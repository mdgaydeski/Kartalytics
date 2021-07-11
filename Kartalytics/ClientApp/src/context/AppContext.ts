import { createContext } from 'react';
import { Match, Player, Tournament, Track } from '../constants/types';

type ContextType = {
    matchList: Match[];
    playerList: Player[];
    tournamentList: Tournament[];
    trackList: Track[];
}

const AppContext = createContext<ContextType>({
    matchList: [],
    playerList: [],
    tournamentList: [],
    trackList: []
});

export default AppContext;