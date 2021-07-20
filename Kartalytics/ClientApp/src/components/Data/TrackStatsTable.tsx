import * as React from 'react';
import TrackStatsSegment from './TrackStatsSegment';
import AverageDisplay from '../Filters/AverageDisplay';
import MinimumResults from '../Filters/MinimumResults';
import YearRange from '../Filters/YearRange';
import TableBorder from '../Layout/TableBorder';
import TableOptions from '../Layout/TableOptions';
import AppContext from '../../context/AppContext';

const { useState, useContext } = React;

type Props = {
    playerId?: number;
    trackId?: number;
}

const TrackStatsTable: React.FC<Props> = ({ playerId, trackId }) => {
    const [startYear, setStartYear] = useState<number>(2018);
    const [endYear, setEndYear] = useState<number>(2020);
    const [minimumResults, setMinimumResults] = useState<number>(1);
    const [showAverageFinish, setShowAverageFinish] = useState<boolean>(true);

    const { raceResults } = useContext(AppContext);
    const results = raceResults.filter(r => playerId ? r.playerId === playerId : r.trackId === trackId)
        .filter(r => r.year >= startYear && r.year <= endYear);

    return (
        <TableBorder>
            <TableOptions>
                <YearRange
                    startYear={startYear}
                    endYear={endYear}
                    setStartYear={setStartYear}
                    setEndYear={setEndYear}
                />
                {trackId && <MinimumResults
                    minimumResults={minimumResults}
                    setMinimumResults={setMinimumResults}
                />}
                <AverageDisplay
                    showAverageFinish={showAverageFinish}
                    setShowAverageFinish={setShowAverageFinish}
                />
            </TableOptions>
            <table className='divide-y-4 divide-transparent my-1 table-fixed text-center w-full'>
                <thead>
                    <tr>
                        <th scope='col' className='w-4/12'>{ playerId ? 'Track' : 'Player' }</th>
                        <th scope='col' className='w-1/12'>Total</th>
                        <th scope='col' className='w-1/12'>1st</th>
                        <th scope='col' className='w-1/12'>2nd</th>
                        <th scope='col' className='w-1/12'>3rd</th>
                        <th scope='col' className='w-1/12'>4th</th>
                        <th scope='col' className='w-3/12'>Avg. {showAverageFinish ? 'Finish' : 'Points'}</th>
                    </tr>
                </thead>
                <TrackStatsSegment
                    assetType={playerId ? 'track' : 'player'}
                    minimumResults={minimumResults}
                    results={results}
                    showAverageFinish={showAverageFinish}
                />
                {playerId && <>
                    <TrackStatsSegment
                        assetType='cup'
                        results={results}
                        showAverageFinish={showAverageFinish}
                    />
                    <TrackStatsSegment
                        assetType='total'
                        results={results}
                        showAverageFinish={showAverageFinish}
                    />
                </>}
                
            </table>
        </TableBorder>
    );
}

export default TrackStatsTable;