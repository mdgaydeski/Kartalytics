import * as React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import TrackStatsSegment from './TrackStatsSegment';
import AverageDisplay from '../Filters/AverageDisplay';
import MinimumResults from '../Filters/MinimumResults';
import YearRange from '../Filters/YearRange';
import ColumnSelector from '../Layout/ColumnSelector';
import Container from '../Layout/Container';
import SortableHeader from '../Layout/SortableHeader';
import TableOptions from '../Layout/TableOptions';
import { RaceResult, TrackStatsColumnType, TrackStatsFilterSet } from '../../constants/types';
import { PLACE_LABELS } from '../../constants/constants';

const { useState, useEffect } = React;

const initialFilters = {
    startYear: 2019,
    endYear: 2019,
    minimumResults: 1,
    showAverageFinish: true,
    sortedColumn: 0,
    sortAscending: true
}

type Props = {
    playerId?: number;
    trackId?: number;
}

const TrackStatsTable: React.FC<Props> = ({ playerId, trackId }) => {
    const handleError = useErrorHandler();
    const [filters, setFilters] = useState<TrackStatsFilterSet>({ ...initialFilters });
    const [tempFilters, setTempFilters] = useState<TrackStatsFilterSet>({ ...initialFilters });
    const [columns, setColumns] = useState<TrackStatsColumnType[]>([]);
    const [results, setResults] = useState<RaceResult[]>([]);
    const [selectedColumn, setSelectedColumn] = useState<number>(0);

    const { showAverageFinish, sortedColumn, sortAscending } = filters;
    const { startYear, endYear, minimumResults } = tempFilters;

    useEffect(() => {
        const columnList = [];
        columnList.push({
            label: playerId ? 'Track' : 'Player',
            className: 'md:w-3/12',
            property: playerId ? 'assetId' : 'assetName'
        });
        columnList.push({
            label: 'Total',
            className: 'md:w-2/12',
            property: 'totalRaces'
        });
        PLACE_LABELS.forEach((p, i) => {
            columnList.push({
                label: p,
                className: 'md:w-1/12',
                property: 'placeTotals',
                index: i
            });
        });
        columnList.push({
            label: `Avg. ${showAverageFinish ? 'Finish' : 'Points'}`,
            className: 'md:w-3/12',
            invertSort: !showAverageFinish,
            property: 'averageFinish'
        });
        setColumns(columnList);
    }, [setColumns, playerId, showAverageFinish]);

    const setFiltersObject = (obj: any) => {
        const newFilters = { ...filters }
        for (const [key, value] of Object.entries(obj)) {
            newFilters[key] = value;
        }
        setFilters(newFilters);
    }

    const setTempFiltersObject = (obj: any) => {
        const newFilters = { ...tempFilters }
        for (const [key, value] of Object.entries(obj)) {
            newFilters[key] = value;
        }
        setTempFilters(newFilters);
    }

    const handleHeaderClick = (colNumber: number) => {
        const newFilters = {
            sortAscending: filters.sortedColumn === colNumber ? !filters.sortAscending : true,
            sortedColumn: colNumber
        }
        setFiltersObject(newFilters);
    }

    useEffect(() => {
        let mounted = true;
        fetch(`/api/raceresults/${playerId ? `player/${playerId}` : `track/${trackId}`}`)
            .then(response => response.json())
            .then(data => mounted && setResults(data))
            .catch(error => handleError(error));

        return () => { mounted = false }
    }, [playerId, trackId, setResults, handleError]);

    const filteredResults = results.filter(r => playerId ? r.playerId === playerId : r.trackId === trackId)
        .filter(r => r.year >= filters.startYear && r.year <= filters.endYear);

    return (
        <>
            <ColumnSelector
                columnLabels={columns.slice(1).map(col => col.label)}
                selectedColumn={selectedColumn}
                callback={setSelectedColumn}
            />
            <Container>
                <TableOptions
                    setFilters={() => setFilters(tempFilters)}
                    clearFilters={() => setTempFilters(filters)}
                >
                    <YearRange
                        startYear={startYear}
                        endYear={endYear}
                        applyFilters={setTempFiltersObject}
                    />
                    {trackId && <MinimumResults
                        minimumResults={minimumResults}
                        applyFilters={setTempFiltersObject}
                    />}
                    <AverageDisplay
                        showAverageFinish={showAverageFinish}
                        applyFilters={setFiltersObject}
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
                                    sortAscending={sortAscending}
                                    isSorted={i === sortedColumn}
                                    isSelected={i === selectedColumn + 1}
                                    key={i}
                                />
                            ))}
                        </tr>
                    </thead>
                    <TrackStatsSegment
                        assetType={playerId ? 'track' : 'player'}
                        columns={columns}
                        filters={filters}
                        results={filteredResults}
                        selectedColumn={selectedColumn}
                    />
                    {playerId && <>
                        <TrackStatsSegment
                            assetType='cup'
                            columns={columns}
                            filters={filters}
                            results={filteredResults}
                            selectedColumn={selectedColumn}
                        />
                        <TrackStatsSegment
                            assetType='total'
                            columns={columns}
                            filters={filters}
                            results={filteredResults}
                            selectedColumn={selectedColumn}
                        />
                    </>}
                </table>
            </Container>
        </>
    );
}

export default TrackStatsTable;