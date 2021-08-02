import * as React from 'react';
import { useParams } from 'react-router-dom';
import MatchTable from '../components/Data/MatchTable';
import { Match } from '../constants/types';
import AppContext from '../context/AppContext';

const { useState, useEffect, useContext } = React;

const Match = () => {
    const { id } = useParams<{ id: string }>();

    const [match, setMatch] = useState<Match | null>(null);
    const { matches } = useContext(AppContext);

    useEffect(() => {
        const currentMatch = matches.filter(p => p.id === Number(id))[0];
        setMatch(currentMatch);
    }, [id, setMatch, matches]);

    return (
        match && <>
            <h1>{match.name}</h1>
            <MatchTable matchId={match.id} hideMatchName />
        </>
    );
}

export default Match;