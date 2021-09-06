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
import { FilterSet, RaceResult, TrackStatsColumnType } from '../../constants/types';
import { PLACE_LABELS } from '../../constants/constants';

const { useState, useEffect } = React;

type Props = {
    playerId?: number;
    trackId?: number;
}

const TrackStatsTable: React.FC<Props> = ({ playerId, trackId }) => {
    const handleError = useErrorHandler();
    const [filters, setFilters] = useState<FilterSet>({
        startYear: 2018,
        endYear: 2020,
        minimumResults: 1,
        showAverageFinish: true,
        sortedColumn: 0,
        sortAscending: true
    });
    const [columns, setColumns] = useState<TrackStatsColumnType[]>([]);
    const [results, setResults] = useState<RaceResult[]>([]);
    const [selectedColumn, setSelectedColumn] = useState<number>(0);

    const { startYear, endYear, minimumResults, showAverageFinish } = filters;

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

    useEffect(() => {
        fetch(`/api/raceresults/${playerId ? `player/${playerId}` : `track/${trackId}`}`)
            .then(response => response.json())
            .then(data => setResults(data))
        .catch(error => handleError(error));
    }, [playerId, trackId, setResults, handleError]);

    const filteredResults = results.filter(r => playerId ? r.playerId === playerId : r.trackId === trackId)
        .filter(r => r.year >= startYear && r.year <= endYear);

    return (
        <>
            <ColumnSelector
                columnLabels={columns.slice(1).map(col => col.label)}
                selectedColumn={selectedColumn}
                callback={setSelectedColumn}
            />
            <Container>
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