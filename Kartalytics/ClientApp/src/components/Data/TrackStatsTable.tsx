import * as React from 'react';
import TrackStatsSegment from './TrackStatsSegment';
import AverageDisplay from '../Filters/AverageDisplay';
import MinimumResults from '../Filters/MinimumResults';
import YearRange from '../Filters/YearRange';
import TableBorder from '../Layout/TableBorder';
import TableOptions from '../Layout/TableOptions';
import { FilterSet } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useState, useContext } = React;

type Props = {
    playerId?: number;
    trackId?: number;
}

const TrackStatsTable: React.FC<Props> = ({ playerId, trackId }) => {
    const [filters, setFilters] = useState<FilterSet>({
        startYear: 2018,
        endYear: 2020,
        minimumResults: 1,
        showAverageFinish: true
    });

    const { startYear, endYear, minimumResults, showAverageFinish } = filters;

    const setProperty = (key: string, value: any) => {
        const newFilters = { ...filters }
        if (newFilters.hasOwnProperty(key)) {
            newFilters[key] = value
        }
        setFilters(newFilters);
    }

    const { raceResults } = useContext(AppContext);
    const results = raceResults.filter(r => playerId ? r.playerId === playerId : r.trackId === trackId)
        .filter(r => r.year >= startYear && r.year <= endYear);

    return (
        <TableBorder>
            <TableOptions>
                <YearRange
                    startYear={startYear}
                    endYear={endYear}
                    setProperty={setProperty}
                />
                {trackId && <MinimumResults
                    minimumResults={minimumResults}
                    setProperty={setProperty}
                />}
                <AverageDisplay
                    showAverageFinish={showAverageFinish}
                    setProperty={setProperty}
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
                    filters={filters}
                    results={results}
                />
                {playerId && <>
                    <TrackStatsSegment
                        assetType='cup'
                        filters={filters}
                        results={results}
                    />
                    <TrackStatsSegment
                        assetType='total'
                        filters={filters}
                        results={results}
                    />
                </>}
            </table>
        </TableBorder>
    );
}

export default TrackStatsTable;