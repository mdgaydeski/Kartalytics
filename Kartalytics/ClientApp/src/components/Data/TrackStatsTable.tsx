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
import { PLACE_LABELS } from '../../constants/constants';

const { useState, useEffect, useContext } = React;

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
    const [columns, setColumns] = useState<TrackStatsColumnType[]>([]);

    const { startYear, endYear, minimumResults, showAverageFinish } = filters;

    useEffect(() => {
        const columnList = [];
        columnList.push({
            label: playerId ? 'Track' : 'Player',
            className: 'w-4/12',
            property: playerId ? 'assetId' : 'assetName'
        });
        columnList.push({
            label: 'Total',
            labelAbbr: 'T',
            className: 'w-1/12',
            property: 'totalRaces'
        });
        PLACE_LABELS.forEach((p, i) => {
            columnList.push({
                label: p,
                labelAbbr: i + 1,
                className: 'w-1/12',
                property: 'placeTotals',
                index: i
            });
        });
        columnList.push({
            label: `Avg. ${showAverageFinish ? 'Finish' : 'Points'}`,
            labelAbbr: 'Avg.',
            className: 'w-3/12',
            invertSort: !showAverageFinish,
            property: 'averageFinish'
        });
        setColumns(columnList);
    }, [setColumns, playerId, showAverageFinish]);

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