import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { MatchResult } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    result: MatchResult;
    highlightedPlace: number;
    highlightedPlayer: boolean;
    selectedCup: number;
    isLastRow?: boolean;
}

const MatchRow: React.FC<Props> = ({ result, highlightedPlace, highlightedPlayer, selectedCup, isLastRow }) => {
    const player = useContext(AppContext).players.filter(p => p.id === result.playerId)[0];

    return (
        <tr className={`${highlightedPlayer ? 'bg-green-900 ' : ''}bg-opacity-80 hover:bg-indigo-900`} key={player.name}>
            <th scope='row' className={isLastRow ? 'pb-2' : undefined}>
                <AssetLink type='player' id={player.id}>
                    {player.name}
                </AssetLink>
            </th>
            <td className={`${isLastRow ? ' pb-2 ' : ''}font-bold text-red-400`}>{result.points}</td>
            {result.raceResults.map((r, i) => (
                <td
                    className={`${isLastRow ? 'pb-2 ' : ''}${highlightedPlace && highlightedPlace !== r.place ? 'text-gray-600 ' : ''}${selectedCup === Math.floor(i / 4) + 1 ? 'table-cell' : 'hidden'} md:table-cell${i % 4 === 0 ? ' border-l border-indigo-900' : ''}`}
                    key={i}
                >
                    {r.place}
                </td>
            ))}
            {result.placeTotals.map((place, i) => (
                <td className={`${isLastRow ? 'pb-2 ' : ''}${selectedCup === 0 ? 'table-cell' : 'hidden'} md:table-cell${i === 0 ? ' border-l border-indigo-900' : ''}`} key={i}>
                    {place}
                </td>
            ))}
        </tr>
    );
}

export default MatchRow;