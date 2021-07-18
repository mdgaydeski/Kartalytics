import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { Player, RoundResult, TournamentResult } from '../../constants/types';
import { sum } from '../../utils';

type Props = {
    player: Player;
    result: TournamentResult;
    roundResults: RoundResult[];
}

const TournamentResultsRow: React.FC<Props> = ({ player, result, roundResults }) => {
    return (
        <tr className='hover:bg-indigo-900' key={result.playerId}>
            <td>{result.place}</td>
            <td>
                <AssetLink type='player' id={player.id}>
                    {player.name}
                </AssetLink>
            </td>
            {roundResults.map((r, i) => {
                return (
                    <td key={i}>
                        {r && sum(r.points)}
                    </td>
                );
            })}
        </tr>
    );
}

export default TournamentResultsRow;