import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { MatchResult } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    result: MatchResult;
    highlightPlace: number;
    highlightPlayer: boolean;
}

const MatchRow: React.FC<Props> = ({ result, highlightPlace, highlightPlayer }) => {
    const player = useContext(AppContext).players.filter(p => p.id === result.playerId)[0];

    return (
        <tr className={`${highlightPlayer ? 'bg-green-900 ' : ''}hover:bg-indigo-900 hover:bg-opacity-80`} key={player.name}>
            <th scope='row'>
                <AssetLink type='player' id={player.id}>
                    {player.name}
                </AssetLink>
            </th>
            <td className='text-red-300'>{result.points}</td>
            {result.trackResults.map((track, i) => (
                <td className={highlightPlace && highlightPlace !== track.result ? 'text-gray-600' : undefined} key={i}>
                    {track.result}
                </td>
            ))}
            {result.placeTotals.map((place, i) => <td key={i}>{place}</td>)}
        </tr>
    );
}

export default MatchRow;