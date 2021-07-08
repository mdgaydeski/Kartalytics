import * as React from 'react';
import AssetLink from '../Layout/AssetLink';

type Props = {
    playerStats: boolean;
}

// column order: [player|track] name / total / 1st / 2nd / 3rd / 4th / avg. points / avg. finish
const TrackStatsRow: React.FC<Props> = ({ playerStats }) => {
    return (
        <tr className='hover:bg-indigo-900'>
            <td>
                {playerStats
                    ? <AssetLink type='track' id={1}>Luigi Raceway</AssetLink>
                    : <AssetLink type='player' id={1}>Jimbo</AssetLink>
                }
            </td>
            <td>6</td>
            <td>1</td>
            <td>3</td>
            <td>0</td>
            <td>2</td>
            <td>1.500</td>
            <td>2.500</td>
        </tr>
    );
}

export default TrackStatsRow;