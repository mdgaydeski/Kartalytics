import * as React from 'react';
import RoundRow from './RoundRow';

type Props = {
    advance: number;
    results: {
        id: number,
        name: string,
        points: number
    }[];
}

const RoundTable: React.FC<Props> = ({ advance, results }) => {
    return (
        <table className='table text-center w-full'>
            <thead>
                <tr>
                    <th className='w-7/12'>Player</th>
                    <th className='w-5/12'>Points</th>
                </tr>
            </thead>
            <tbody>
                {results.sort((a, b) => b.points - a.points).map((player, j) => (
                    <RoundRow
                        player={{ id: player.id, name: player.name, results: [] }}
                        points={player.points}
                        advance={j < advance}
                        key={j}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default RoundTable;