import * as React from 'react';
import { Link } from 'react-router-dom';

// column order: player name / total / 1st / 2nd / 3rd / 4th / avg. points / avg. finish
const TrackStatsRow = () => {
    return (
        <tr className='hover:bg-indigo-900'>
            <td>
                <Link to={`/player/1`}>{'Player'}</Link>
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