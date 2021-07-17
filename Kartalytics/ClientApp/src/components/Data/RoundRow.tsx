import * as React from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import AssetLink from '../Layout/AssetLink';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    playerId: number;
    points: number;
    advance: boolean;
}

const RoundRow: React.FC<Props> = ({ playerId, points, advance }) => {
    const baseClasses = 'align-text-top h-5 w-5 inline ml-2';
    const player = useContext(AppContext).players.filter(p => p.id === playerId)[0];

    return (
        <tr key={player.id}>
            <td className=''>
                <AssetLink type='player' id={player.id}>
                    {player.name}
                </AssetLink>
            </td>
            <td>
                {points}
                {advance
                    ? <CheckIcon className={`${baseClasses} text-green-500`} />
                    : <XIcon className={`${baseClasses} text-red-500`} />
                }
            </td>
        </tr>
    );
}

export default RoundRow;