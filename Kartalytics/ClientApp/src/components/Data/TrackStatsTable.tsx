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
        sortedColumn: 0,
        sortAscending: true
    });

    const { startYear, endYear, minimumResults, showAverageFinish } = filters;

    const columns: TrackStatsColumnType[] = [
        {
            label: playerId ? 'Track' : 'Player',
            className: 'w-4/12',
            property: playerId ? 'assetId' : 'assetName'
        },
        {
            label: 'Total',
            className: 'w-1/12',
            property: 'totalRaces'
        },
        {
            label: '1st',
            className: 'w-1/12',
            property: 'placeTotals',
            index: 0
        },
        {
            label: '2nd',
            className: 'w-1/12',
            property: 'placeTotals',
            index: 1
        },
        {
            label: '3rd',
            className: 'w-1/12',
            property: 'placeTotals',
            index: 2
        },
        {
            label: '4th',
            className: 'w-1/12',
            property: 'placeTotals',
            index: 3
        },
        {
            label: `Avg. ${showAverageFinish ? 'Finish' : 'Points'}`,
            className: 'w-3/12',
            invertSort: !showAverageFinish,
            property: 'averageFinish'
        },
    ];

    const setProperty = (key: string, value: any) => {
        const newFilters = { ...filters }
        if (newFilters.hasOwnProperty(key)) {
            newFilters[key] = value
        }
        setFilters(newFilters);
    }

    const handleHeaderClick = (colNumber: number) => {
        const newFilters = { ...filters }
        newFilters.sortAscending = filters.sortedColumn === colNumber ? !filters.sortAscending : true;
        newFilters.sortedColumn = colNumber;
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
                                handleClick={handleHeaderClick}
                                sortAscending={filters.sortAscending}
                                isSorted={i === filters.sortedColumn}
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