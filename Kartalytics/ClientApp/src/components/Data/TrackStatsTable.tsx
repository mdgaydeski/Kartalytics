import * as React from 'react';
import TrackStatsSegment from './TrackStatsSegment';
import AverageDisplay from '../Filters/AverageDisplay';
import MinimumResults from '../Filters/MinimumResults';
import YearRange from '../Filters/YearRange';
import SortableHeader from '../Layout/SortableHeader';
import TableBorder from '../Layout/TableBorder';
import TableOptions from '../Layout/TableOptions';
import { FilterSet, TrackStatsColumnType } from '../../constants/types';
import AppContext from '../../context/AppContext';
import { compareAscending, compareDescending, compareTrackRowsByName } from '../../utils';

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
        showAverageFinish: true,
        sortedColumn: 0
    });

    const { startYear, endYear, minimumResults, showAverageFinish } = filters;

    const columns: TrackStatsColumnType[] = [
        {
            label: playerId ? 'Track' : 'Player',
            className: 'w-4/12',
            sortFunction: compareTrackRowsByName
        },
        {
            label: 'Total',
            className: 'w-1/12',
            sortFunction: (a, b) => compareDescending(a.totalRaces, b.totalRaces) || compareTrackRowsByName(a, b)
        },
        {
            label: '1st',
            className: 'w-1/12',
            sortFunction: (a, b) => compareDescending(a.placeTotals[0], b.placeTotals[0]) || compareTrackRowsByName(a, b)
        },
        {
            label: '2nd',
            className: 'w-1/12',
            sortFunction: (a, b) => compareDescending(a.placeTotals[1], b.placeTotals[1]) || compareTrackRowsByName(a, b)
        },
        {
            label: '3rd',
            className: 'w-1/12',
            sortFunction: (a, b) => compareDescending(a.placeTotals[2], b.placeTotals[2]) || compareTrackRowsByName(a, b)
        },
        {
            label: '4th',
            className: 'w-1/12',
            sortFunction: (a, b) => compareDescending(a.placeTotals[3], b.placeTotals[3]) || compareTrackRowsByName(a, b)
        },
        {
            label: `Avg. ${showAverageFinish ? 'Finish' : 'Points'}`,
            className: 'w-3/12',
            sortFunction: (a, b) => compareAscending(a.averageFinish, b.averageFinish) || compareTrackRowsByName(a, b)
        },
    ];

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
                        {columns.map((column, i) => (
                            <SortableHeader
                                column={column}
                                colNumber={i}
                                setProperty={setProperty}
                                key={i}
                            />
                        ))}
                    </tr>
                </thead>
                <TrackStatsSegment
                    assetType={playerId ? 'track' : 'player'}
                    columns={columns}
                    filters={filters}
                    results={results}
                />
                {playerId && <>
                    <TrackStatsSegment
                        assetType='cup'
                        columns={columns}
                        filters={filters}
                        results={results}
                    />
                    <TrackStatsSegment
                        assetType='total'
                        columns={columns}
                        filters={filters}
                        results={results}
                    />
                </>}
            </table>
        </TableBorder>
    );
}

export default TrackStatsTable;