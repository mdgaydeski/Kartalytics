import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { Player, TournamentResult } from '../../constants/types';
import { players } from '../../tempdata/players';
import { tournaments } from '../../tempdata/tournaments';

const { useState, useEffect } = React;

const Results = () => {
    const [playerList, setPlayerList] = useState<Player[]>([]);
    const [finalResults, setFinalResults] = useState<TournamentResult[]>([]);

    useEffect(() => {
        setPlayerList(players);
    }, [setPlayerList]);

    useEffect(() => {
        const results = tournaments[0].finalResults;
        setFinalResults(results);
    }, [setFinalResults]);

    return (
        <>
            <h2>Results</h2>
            <div>
                {finalResults.map(result => (
                    <p key={result.playerId}>
                        {result.place}.&nbsp;
                        <AssetLink type='player' id={result.playerId}>
                            {playerList.filter(p => p.id === result.playerId)[0].name}
                        </AssetLink>
                    </p>
                ))}
            </div>
        </>
    );
}

export default Results;