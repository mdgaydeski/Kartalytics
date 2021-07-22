import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { TrackStatsRowType } from '../../constants/types';

type Props = {
    rowData: TrackStatsRowType;
    showAverageFinish: boolean;
}

const TrackStatsRow: React.FC<Props> = ({ rowData, showAverageFinish }) => {
    const { assetId, assetName, assetType, totalRaces, placeTotals, averageFinish } = rowData;
    const averagePoints = 4 - averageFinish;

    // column order: header / total / 1st / 2nd / 3rd / 4th / avg. [points|finish]
    return (
        <tr className='hover:bg-indigo-900 hover:bg-opacity-80'>
            <th scope='row'>
                {(assetType === 'player' || assetType === 'track')
                    ? <AssetLink type={assetType} id={assetId}>
                        {assetName}
                    </AssetLink>
                    : assetName
                }
            </th>
            <td>{totalRaces}</td>
            {placeTotals.map((p, i) => <td key={i}>{p}</td>)}
            <td>{(showAverageFinish ? averageFinish : averagePoints).toFixed(3)}</td>
        </tr>
    );
}

export default TrackStatsRow;