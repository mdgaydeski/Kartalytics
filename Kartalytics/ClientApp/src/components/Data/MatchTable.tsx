import * as React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import MatchRow from './MatchRow';
import MatchTableHeader from './MatchTableHeader';
import HighlightPlace from '../Filters/HighlightPlace';
import AssetLink from '../Layout/AssetLink';
import ColumnSelector from '../Layout/ColumnSelector';
import Container from '../Layout/Container';
import TableOptions from '../Layout/TableOptions';
import MatchGraph from '../Match/MatchGraph';
import VideoList from '../Match/VideoList';
import { Match, MatchResult } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useState, useEffect, useContext } = React;

type Props = {
    matchId: number;
    playerId?: number;
    fromDetailsPage?: boolean;
}

const MatchTable: React.FC<Props> = ({ matchId, playerId, fromDetailsPage }) => {
    const handleError = useErrorHandler();
    const [highlightedPlace, setHighlightedPlace] = useState<number>(0);
    const [match, setMatch] = useState<Match | null>(null);
    const [results, setResults] = useState<MatchResult[]>([]);
    const [selectedCup, setSelectedCup] = useState<number>(0);
    results.sort((a, b) => a.place - b.place);

    const { cups } = useContext(AppContext);
    const cupLabels = ['Totals']
    match && match.cupOrder && match.cupOrder.forEach(cupId => {
        const cup = cups.find(c => c.id === cupId);
        cup && cupLabels.push(cup.name);
    });

    useEffect(() => {
        let mounted = true
        fetch(`/api/matches/${matchId}`)
            .then(response => response.json())
            .then(data => mounted && setMatch(data))
            .catch(error => handleError(error));

        fetch(`/api/matches/${matchId}/results`)
            .then(response => response.json())
            .then(data => mounted && setResults(data))
            .catch(error => handleError(error));

        return () => { mounted = false }
    }, [matchId, setMatch, setResults, handleError]);

    return (
        match && <>
            {fromDetailsPage ? <h1>{match.name}</h1> : <h4>{match.name}</h4>}
            <ColumnSelector
                columnLabels={match.cupOrder ? cupLabels : []}
                selectedColumn={selectedCup}
                callback={setSelectedCup}
            />
            <div className='flex flex-col mx-auto px-1 md:flex-row'>
                {!fromDetailsPage && <AssetLink type='match' id={matchId}>View Detailed Breakdown</AssetLink>}
                {match.videos.length > 0 && <VideoList videoList={match.videos} />}
            </div>
            <Container>
                <TableOptions>
                    <HighlightPlace
                        highlightedPlace={highlightedPlace}
                        matchId={matchId}
                        places={results.length}
                        handleChange={setHighlightedPlace}
                    />
                </TableOptions>
                <table className='rounded-b-lg table-fixed text-center w-full'>
                    <MatchTableHeader cupOrder={match.cupOrder} trackOrder={match.trackOrder} selectedCup={selectedCup} />
                    <tbody>
                        {results.map((result, i) => (
                            <MatchRow
                                result={result}
                                highlightedPlace={highlightedPlace}
                                highlightedPlayer={result.playerId === playerId}
                                selectedCup={selectedCup}
                                isLastRow={i === results.length - 1}
                                key={result.playerId}
                            />
                        ))}
                    </tbody>
                </table>
                {fromDetailsPage && <MatchGraph match={match} matchResults={results} />}
            </Container>
        </>
    );
}

export default MatchTable;