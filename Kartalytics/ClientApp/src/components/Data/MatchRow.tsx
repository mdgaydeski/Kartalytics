import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { MatchResult } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    result: MatchResult;
    highlight: boolean;
}

const MatchRow: React.FC<Props> = ({ result, highlight }) => {
    const player = useContext(AppContext).playerList.filter(p => p.id === result.playerId)[0];

    return (
        <tr className={`${highlight && 'bg-green-900'} hover:bg-indigo-900`} key={player.name}>
            <td className='text-left'>
                <AssetLink type='player' id={player.id}>
                    {player.name}
                </AssetLink>
            </td>
            <td className='text-red-300'>{result.points}</td>
            {result.trackResults.map((track, i) => <td key={i}>{track.result}</td>)}
            {result.placeTotals.map((place, i) => <td key={i}>{place}</td>)}
        </tr>
    );
}

export default MatchRow;