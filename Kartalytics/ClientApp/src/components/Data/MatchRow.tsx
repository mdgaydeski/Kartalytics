import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { MatchResult } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    result: MatchResult;
}

const MatchRow: React.FC<Props> = ({ result }) => {
    const player = useContext(AppContext).playerList.filter(p => p.id === result.playerId)[0];

    return (
        <tr className='hover:bg-indigo-900' key={player.name}>
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