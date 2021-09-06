import * as React from 'react';
import TrackStatsRow from './TrackStatsRow';
import { FilterSet, RaceResult, TrackStatsColumnType, TrackStatsRowType } from '../../constants/types';
import AppContext from '../../context/AppContext';
import { compare, sum, sumOfResults } from '../../utils';

const { useContext, useEffect, useState } = React;

type Props = {
    assetType: string;
    columns: TrackStatsColumnType[];
    filters: FilterSet;
    results: RaceResult[];
    selectedColumn: number;
}

const TrackStatsSegment: React.FC<Props> = ({ assetType, columns, filters, results, selectedColumn }) => {
    const [resultsGroups, setResultsGroups] = useState<TrackStatsRowType[]>([]);
    const [filteredResults, setFilteredResults] = useState<TrackStatsRowType[]>([]);
    const [sortedResults, setSortedResults] = useState<TrackStatsRowType[]>([]);
    const { cups, players, tracks } = useContext(AppContext);
    const { showAverageFinish, sortedColumn } = filters;

    useEffect(() => {     
        const groups = results.reduce((acc, r) => {
            let asset = undefined;

            if (assetType === 'cup') {
                asset = cups.filter(c => c.tracks.some(t => t === r.trackId))[0];
            } else if (assetType === 'player') {
                asset = players.filter(p => p.id === r.playerId)[0];
            } else if (assetType === 'track') {
                asset = tracks.filter(t => t.id === r.trackId)[0];
            }

            const assetId = asset ? asset.id : 0;
            const assetName = asset ? asset.name : 'Total';

            if (!acc.filter(a => a.assetId === assetId).length) {
                acc.push({
                    assetId,
                    assetName,
                    assetType,
                    totalRaces: 0,
                    placeTotals: [0, 0, 0, 0],
                    averageFinish: 0.0
                });
            }
            const entry = acc.filter(a => a.assetId === assetId)[0];
            entry.totalRaces++;
            entry.placeTotals[r.place - 1]++;
            return acc;
        }, [] as TrackStatsRowType[]);

        groups.forEach(g => g.averageFinish = sumOfResults(g.placeTotals) / g.totalRaces);
        setResultsGroups(groups);
    }, [assetType, cups, players, results, setResultsGroups, tracks]);

    useEffect(() => {
        const { minimumResults } = filters;
        const results = resultsGroups.filter(row => minimumResults > 1 ? sum(row.placeTotals) >= minimumResults : true);
        setFilteredResults(results);
    }, [filters, resultsGroups, setFilteredResults])

    useEffect(() => {
        if (columns.length > 0) {
            const { property, index } = columns[sortedColumn];
            const { sortAscending } = filters;
            const groups = [...filteredResults].sort((a, b) => compare(a, b, sortAscending, property, index));
            setSortedResults(groups);
        }
    }, [columns, filters, filteredResults, setSortedResults, sortedColumn]);

    return (
        <tbody>
            {sortedResults.map(r => (
                <TrackStatsRow
                    rowData={r}
                    showAverageFinish={showAverageFinish}
                    selectedColumn={selectedColumn}
                    key={r.assetId}
                />
            ))}
        </tbody>
    );
}

export default TrackStatsSegment;