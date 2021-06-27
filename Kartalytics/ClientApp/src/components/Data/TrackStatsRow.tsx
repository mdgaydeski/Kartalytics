import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    playerStats: boolean;
}

// column order: [player|track] name / total / 1st / 2nd / 3rd / 4th / avg. points / avg. finish
const TrackStatsRow: React.FC<Props> = ({ playerStats }) => {
    return (
        <tr className='hover:bg-indigo-900'>
            <td>
                {playerStats
                    ? <Link to={`/track/1`}>{'Luigi Raceway'}</Link>
                    : <Link to={`/player/1`}>{'Jimbo'}</Link>
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