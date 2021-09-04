import * as React from 'react';
import { CheckIcon, StarIcon, XIcon } from '@heroicons/react/solid';
import AssetLink from '../Layout/AssetLink';
import { FINALIST_MEDAL_COLORS } from '../../constants/constants';
import AppContext from '../../context/AppContext';
import { sum } from '../../utils';

const { useContext } = React;

type Props = {
    playerId: number;
    points: number[];
    advance?: boolean;
    finalPlace?: number;
}

const RoundRow: React.FC<Props> = ({ playerId, points, advance, finalPlace }) => {
    const baseClasses = 'align-text-top h-5 w-5 inline ml-2';
    const player = useContext(AppContext).players.filter(p => p.id === playerId)[0];

    return (
        <tr className='hover:bg-indigo-900' key={player.id}>
            <td className=''>
                <AssetLink type='player' id={player.id}>
                    {player.name}
                </AssetLink>
            </td>
            <td>
                {points.length === 1
                    ? points[0]
                    : <>
                        {sum(points)}
                        &nbsp;({points.map((p, i) => i === 0 ? p : `, ${p}`)})
                    </>
                }
                {advance !== undefined ?
                    advance
                        ? <CheckIcon className={`${baseClasses} text-green-500`} />
                        : <XIcon className={`${baseClasses} text-red-500`} />
                    : finalPlace && finalPlace <= 3
                        ? <StarIcon className={baseClasses} style={{color: FINALIST_MEDAL_COLORS[finalPlace - 1]}} />
                        : undefined
                }
            </td>
        </tr>
    );
}

export default RoundRow;