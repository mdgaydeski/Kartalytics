import * as React from 'react';
import TournamentResultsTable from '../Data/TournamentResultsTable';
import { TournamentResult, TournamentRound } from '../../constants/types';

type Props = {
    results: TournamentResult[];
    rounds: TournamentRound[];
}

const Results: React.FC<Props> = ({ results, rounds }) => {
    return (
        <>
            <h2>Results</h2>
            <TournamentResultsTable results={results} rounds={rounds} />
        </>
    );
}

export default Results;