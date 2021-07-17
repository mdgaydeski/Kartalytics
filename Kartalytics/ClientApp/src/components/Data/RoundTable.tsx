import * as React from 'react';
import RoundRow from './RoundRow';
import { RoundResult } from '../../constants/types';

type Props = {
    advance: number;
    results: RoundResult[];
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
                {results.sort((a, b) => a.place - b.place).map((result, i) => (
                    <RoundRow
                        playerId={result.playerId}
                        points={result.totalPoints}
                        advance={i < advance}
                        key={i}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default RoundTable;