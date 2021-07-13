import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { Result } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    results: Result[];
    id: number;
    type: string;
    showAverageFinish: boolean;
}

const TrackStatsRow: React.FC<Props> = ({ results, id, type, showAverageFinish }) => {
    const { cupList, playerList, trackList } = useContext(AppContext);
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

    const getRowHeader = () => {
        switch (type) {
            case 'player':
                return (
                    <AssetLink type='player' id={id}>
                        {playerList.filter(p => p.id === id)[0].name}
                    </AssetLink>
                );
            case 'track':
                return (
                    <AssetLink type='track' id={id}>
                        {trackList.filter(t => t.id === id)[0].name}
                    </AssetLink>
                );
            case 'cup':
                return cupList.filter(c => c.id === id)[0].name
            default:
                return 'Total';
        }
    }

    // column order: header / total / 1st / 2nd / 3rd / 4th / avg. [points|finish]
    return (
        <tr className='hover:bg-indigo-900 hover:bg-opacity-80'>
            <th scope='row'>{getRowHeader()}</th>
            <td>{results.length}</td>
            <td>{resultsByPlace[1]}</td>
            <td>{resultsByPlace[2]}</td>
            <td>{resultsByPlace[3]}</td>
            <td>{resultsByPlace[4]}</td>
            <td>{(showAverageFinish ? avgFinish : avgPoints).toFixed(3)}</td>
        </tr>
    );
}

export default TrackStatsRow;