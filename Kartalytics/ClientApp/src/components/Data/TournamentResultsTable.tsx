import * as React from 'react';
import TournamentResultsRow from '../Data/TournamentResultsRow';
import ColumnSelector from '../Layout/ColumnSelector';
import Container from '../Layout/Container';
import { TournamentResult, TournamentRound } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useState, useContext } = React;

type Props = {
    results: TournamentResult[];
    rounds: TournamentRound[];
}

const TournamentResultsTable: React.FC<Props> = ({ results, rounds }) => {
    const { players } = useContext(AppContext);
    const [selectedRound, setSelectedRound] = useState<number>(0);

    return (
        <>
            <ColumnSelector
                columnLabels={rounds.map(r => r.name)}
                selectedColumn={selectedRound}
                callback={setSelectedRound}
            />
            <Container className='pb-4'>
                <table className='table-fixed text-center w-full'>
                    <thead>
                        <tr>
                            <th className='py-2' scope='col'>Overall Place</th>
                            <th className='py-2 md:w-1/4' scope='col'>Player</th>
                            {rounds.map((round, i) => (
                                <th
                                    scope='col'
                                    className={`${selectedRound === i ? 'table-cell' : 'hidden'} md:table-cell`}
                                    key={i}
                                >
                                    {round.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {results.map(result => (
                            <TournamentResultsRow
                                player={players.filter(p => p.id === result.playerId)[0]}
                                result={result}
                                roundResults={rounds.map(round => round.results.filter(r => r.playerId === result.playerId)[0])}
                                selectedRound={selectedRound}
                                key={result.playerId}
                            />
                        ))}
                    </tbody>
                </table>
            </Container>
        </>
    );
}

export default TournamentResultsTable;