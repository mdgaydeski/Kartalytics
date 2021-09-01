import * as React from 'react';
import MatchRow from './MatchRow';
import MatchTableHeader from './MatchTableHeader';
import HighlightPlace from '../Filters/HighlightPlace';
import AssetLink from '../Layout/AssetLink';
import Container from '../Layout/Container';
import TableOptions from '../Layout/TableOptions';
import MatchGraph from '../Match/MatchGraph';
import VideoList from '../Match/VideoList';
import AppContext from '../../context/AppContext';

const { useState, useContext } = React;

type Props = {
    matchId: number;
    playerId?: number;
    fromDetailsPage?: boolean;
}

const MatchTable: React.FC<Props> = ({ matchId, playerId, fromDetailsPage }) => {
    const [highlightedPlace, setHighlightedPlace] = useState<number>(0);
    const { matches, matchResults } = useContext(AppContext);
    const match = matches.filter(m => m.id === matchId)[0];
    const results = match.results.map(m => matchResults.filter(r => r.id === m)[0]);
    results.sort((a, b) => a.place - b.place);

    const numberOfTracks = match.cupOrder ? match.cupOrder.length * 4
        : match.trackOrder ? match.trackOrder.length : 0;

    return (
        <>
            {!fromDetailsPage && <h4>{match.name}</h4>}
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
                {fromDetailsPage && <MatchGraph matchId={match.id} />}
            </Container>
        </>
    );
}

export default MatchTable;