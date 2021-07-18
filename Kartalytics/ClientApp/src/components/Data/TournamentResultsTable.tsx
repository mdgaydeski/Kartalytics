import * as React from 'react';
import TournamentResultsRow from '../Data/TournamentResultsRow';
import { TournamentResult, TournamentRound } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    results: TournamentResult[];
    rounds: TournamentRound[];
}

const TournamentResultsTable: React.FC<Props> = ({ results, rounds }) => {
    const { players } = useContext(AppContext);

    return (
        <table className='table-fixed text-center w-full'>
            <colgroup>
                <col className='w-1/4' />
                <col className='w-1/2' />
                <col span={rounds.length} className='w-1/4' />
            </colgroup>
            <thead>
                <tr>
                    <th scope='col'>Place</th>
                    <th scope='col'>Player</th>
                    {rounds.map(round => <th scope='col' key={round.roundNumber}>{round.name}</th>)}
                </tr>
            </thead>
            <tbody>
                {results.map(result => (
                    <TournamentResultsRow
                        player={players.filter(p => p.id === result.playerId)[0]}
                        result={result}
                        roundResults={rounds.map(round => round.results.filter(r => r.playerId === result.playerId)[0])}
                        key={result.playerId}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default TournamentResultsTable;