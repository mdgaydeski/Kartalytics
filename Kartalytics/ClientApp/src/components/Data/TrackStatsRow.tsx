import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { Result } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    results: Result[];
    playerId: number;
    trackId: number;
}

const TrackStatsRow: React.FC<Props> = ({ results, playerId, trackId }) => {
    const { playerList, trackList } = useContext(AppContext);
    // total finish / 1st / 2nd / 3rd / 4th
    // avg. finish = total finish / results.length
    // avg. points = 4 - avg. finish
    const resultsByPlace = results.reduce((acc, r) => {
        acc[0]+= r.result;
        acc[r.result]++;
        return acc;
    }, [0, 0, 0, 0, 0] as number[]);
    const avgFinish = (resultsByPlace[0] / results.length);
    const avgPoints = 4 - avgFinish;

    // column order: [player|track] name / total / 1st / 2nd / 3rd / 4th / avg. points / avg. finish
    return (
        <tr className='hover:bg-indigo-900'>
            <td>
                {playerId
                    ? <AssetLink type='player' id={playerId}>
                        {playerList.filter(p => p.id === playerId)[0].name}
                    </AssetLink>
                    : <AssetLink type='track' id={trackId}>
                        {trackList.filter(t => t.id === trackId)[0].name}
                    </AssetLink>
                }
            </td>
            <td>{results.length}</td>
            <td>{resultsByPlace[1]}</td>
            <td>{resultsByPlace[2]}</td>
            <td>{resultsByPlace[3]}</td>
            <td>{resultsByPlace[4]}</td>
            <td>{avgPoints.toFixed(3)}</td>
            <td>{avgFinish.toFixed(3)}</td>
        </tr>
    );
}

export default TrackStatsRow;