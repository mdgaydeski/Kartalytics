import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { Player } from '../../constants/types';
import { getPlaceTotals, getPoints } from '../../utils';

type Props = {
    player: Player;
}

const MatchRow: React.FC<Props> = ({ player }) => {
    const placeTotals = getPlaceTotals(player.results);
    const points = getPoints(placeTotals);

    return (
        <tr className='hover:bg-indigo-900' key={player.name}>
            <td className='text-left'>
                <AssetLink type='player' id={player.id} name={player.name} />
            </td>
            <td className='text-red-300'>{points}</td>
            {player.results.map((result: number, i: number) => <td key={i}>{result}</td>)}
            {placeTotals.map((place: number, i: number) => <td key={i}>{place}</td>)}
        </tr>
    );
}

export default MatchRow;