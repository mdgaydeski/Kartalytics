import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { ContextObject, RoundResult, TournamentResult } from '../../constants/types';
import { sum } from '../../utils';

type Props = {
    player: ContextObject;
    result: TournamentResult;
    roundResults: RoundResult[];
    selectedRound: number;
}

const TournamentResultsRow: React.FC<Props> = ({ player, result, roundResults, selectedRound }) => {
    return (
        <tr className='hover:bg-indigo-900' key={result.playerId}>
            <td>{result.place}</td>
            <th scope='row'>
                <AssetLink type='player' id={player.id}>
                    {player.name}
                </AssetLink>
            </th>
            {roundResults.map((r, i) => {
                return (
                    <td className={`${selectedRound === i ? 'table-cell' : 'hidden'} md:table-cell`} key={i}>
                        {r && sum(r.points)}
                    </td>
                );
            })}
        </tr>
    );
}

export default TournamentResultsRow;