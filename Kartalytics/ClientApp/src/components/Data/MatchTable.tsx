import * as React from 'react';
import MatchRow from './MatchRow';
import MatchTableHeader from './MatchTableHeader';
import HighlightPlace from '../Filters/HighlightPlace';
import AssetLink from '../Layout/AssetLink';
import Container from '../Layout/Container';
import TableOptions from '../Layout/TableOptions';
import MatchGraph from '../Match/MatchGraph';
import VideoList from '../Match/VideoList';
import { Match, MatchResult } from '../../constants/types';

const { useState, useEffect } = React;

type Props = {
    matchId: number;
    playerId?: number;
    fromDetailsPage?: boolean;
}

const MatchTable: React.FC<Props> = ({ matchId, playerId, fromDetailsPage }) => {
    const [highlightedPlace, setHighlightedPlace] = useState<number>(0);
    const [match, setMatch] = useState<Match | null>(null);
    const [results, setResults] = useState<MatchResult[]>([]);
    results.sort((a, b) => a.place - b.place);

    useEffect(() => {
        fetch(`/api/matches/${matchId}`)
            .then(response => response.json())
            .then(data => setMatch(data))
            //.catch(error => handleError(error));

        fetch(`/api/matches/${matchId}/results`)
            .then(response => response.json())
            .then(data => setResults(data))
            //.catch(error => handleError(error));
    }, [matchId, setMatch, setResults]);

    const numberOfTracks = match && match.cupOrder ? match.cupOrder.length * 4
        : match && match.trackOrder ? match.trackOrder.length : 0;

    return (
        match && <>
            {fromDetailsPage ? <h1>{match.name}</h1> : <h4>{match.name}</h4>}
            <div className='flex mx-auto px-1'>
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
                <table className='my-2 rounded-b-lg table-fixed text-center w-full'>
                    <colgroup>
                        <col className='w-4/5' />
                        <col span={numberOfTracks + match.results.length + 1} className='w-1/5' />
                    </colgroup>
                    <MatchTableHeader cupOrder={match.cupOrder} trackOrder={match.trackOrder} />
                    <tbody>
                        {results.map(result => (
                            <MatchRow
                                result={result}
                                highlightedPlace={highlightedPlace}
                                highlightedPlayer={result.playerId === playerId}
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