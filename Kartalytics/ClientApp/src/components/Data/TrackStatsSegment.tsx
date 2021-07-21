import * as React from 'react';
import TrackStatsRow from './TrackStatsRow';
import { FilterSet, RaceResult, TrackStatsRowType } from '../../constants/types';
import AppContext from '../../context/AppContext';
import { sum } from '../../utils';

const { useContext } = React;

type Props = {
    assetType: string;
    filters: FilterSet;
    results: RaceResult[];
}

const TrackStatsSegment: React.FC<Props> = ({ assetType, filters, results }) => {
    const { cups } = useContext(AppContext);
    const { minimumResults, showAverageFinish } = filters;

    const resultsGroups = results.reduce((acc, r) => {
        let assetId = 0;
        switch (assetType) {
            case 'player':
                assetId = r.playerId;
                break;
            case 'track':
                assetId = r.trackId;
                break;
            case 'cup':
                assetId = cups.filter(c => c.tracks.some(t => t === r.trackId))[0].id;
                break;
            default:
        }

        if (!acc.filter(a => a.assetId === assetId).length) {
            acc.push({
                assetId,
                assetType,
                placeTotals: [0, 0, 0, 0]
            });
        }
        acc.filter(a => a.assetId === assetId)[0].placeTotals[r.place - 1]++;
        return acc;
    }, [] as TrackStatsRowType[]).filter(row => minimumResults > 1 ? sum(row.placeTotals) >= minimumResults : true);

    return (
        <tbody>
            {resultsGroups.map(r => (
                <TrackStatsRow
                    rowData={r}
                    showAverageFinish={showAverageFinish}
                    key={r.assetId}
                />
            ))}
        </tbody>
    );
}

export default TrackStatsSegment;