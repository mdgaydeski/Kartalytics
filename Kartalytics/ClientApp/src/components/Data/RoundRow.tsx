import * as React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import { Player } from '../../constants/types'; 

type Props = {
    player: Player;
    points: number;
    advance: boolean;
}

const RoundRow: React.FC<Props> = ({ player, points, advance }) => {
    const baseClasses = 'align-text-top h-5 w-5 inline mr-2'

    return (
        <tr key={player.id}>
            <td className=''>
                {advance
                    ? <CheckIcon className={`${baseClasses} text-green-500`} />
                    : <XIcon className={`${baseClasses} text-red-500`} />
                }
                <Link to={`/player/${player.id}`}>{player.name}</Link>
            </td>
            <td>{points}</td>
        </tr>
    );
}

export default RoundRow;