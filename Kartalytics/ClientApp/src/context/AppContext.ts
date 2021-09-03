import { createContext } from 'react';
import { ContextObject, Cup, TournamentContextObject } from '../constants/types';

type ContextType = {
    cups: Cup[]
    players: ContextObject[];
    tournaments: TournamentContextObject[];
    tracks: ContextObject[];
}

const AppContext = createContext<ContextType>({
    cups: [],
    players: [],
    tournaments: [],
    tracks: []
});

export default AppContext;