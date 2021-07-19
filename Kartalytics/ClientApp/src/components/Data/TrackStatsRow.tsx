import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { TrackStatsRowType } from '../../constants/types';
import AppContext from '../../context/AppContext';
import { sum } from '../../utils';

const { useContext } = React;

type Props = {
    rowData: TrackStatsRowType;
    showAverageFinish: boolean;
}

const TrackStatsRow: React.FC<Props> = ({ rowData, showAverageFinish }) => {
    const { cups, players, tracks } = useContext(AppContext);
    const { assetId, assetType, placeTotals } = rowData;

    // avg. finish = total finish / results.length
    // avg. points = 4 - avg. finish
    const totalRaces = sum(placeTotals);
    const avgFinish = placeTotals.reduce((acc, p, i) => acc + (p * (i + 1))) / totalRaces;
    const avgPoints = 4 - avgFinish;

    const getRowHeader = () => {
        switch (assetType) {
            case 'player':
                return (
                    <AssetLink type='player' id={assetId}>
                        {players.filter(p => p.id === assetId)[0].name}
                    </AssetLink>
                );
            case 'track':
                return (
                    <AssetLink type='track' id={assetId}>
                        {tracks.filter(t => t.id === assetId)[0].name}
                    </AssetLink>
                );
            case 'cup':
                return cups.filter(c => c.id === assetId)[0].name
            default:
                return 'Total';
        }
    }

    // column order: header / total / 1st / 2nd / 3rd / 4th / avg. [points|finish]
    return (
        <tr className='hover:bg-indigo-900 hover:bg-opacity-80'>
            <th scope='row'>{getRowHeader()}</th>
            <td>{totalRaces}</td>
            {placeTotals.map((p, i) => <td key={i}>{p}</td>)}
            <td>{(showAverageFinish ? avgFinish : avgPoints).toFixed(3)}</td>
        </tr>
    );
}

export default TrackStatsRow;