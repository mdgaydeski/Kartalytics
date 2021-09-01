import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { MatchResult } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    result: MatchResult;
    highlightedPlace: number;
    highlightedPlayer: boolean;
}

const MatchRow: React.FC<Props> = ({ result, highlightedPlace, highlightedPlayer }) => {
    const player = useContext(AppContext).players.filter(p => p.id === result.playerId)[0];

    return (
        <tr className={`${highlightedPlayer ? 'bg-green-900 ' : ''}bg-opacity-80 hover:bg-indigo-900`} key={player.name}>
            <th scope='row'>
                <AssetLink type='player' id={player.id}>
                    {player.name}
                </AssetLink>
            </th>
            <td className='font-bold text-red-400'>{result.points}</td>
            {result.raceResults.map((r, i) => (
                <td className={highlightedPlace && highlightedPlace !== r.place ? 'text-gray-600' : undefined} key={i}>
                    {r.place}
                </td>
            ))}
            {result.placeTotals.map((place, i) => <td key={i}>{place}</td>)}
        </tr>
    );
}

export default MatchRow;