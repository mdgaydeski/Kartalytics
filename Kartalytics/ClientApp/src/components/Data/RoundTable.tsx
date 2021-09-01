import * as React from 'react';
import RoundRow from './RoundRow';
import Container from '../Layout/Container';
import { RoundResult } from '../../constants/types';

type Props = {
    advance: number;
    results: RoundResult[];
}

const RoundTable: React.FC<Props> = ({ advance, results }) => {
    return (
        <Container className='pb-4'>
            <table className='table text-center w-full'>
                <thead>
                    <tr>
                        <th className='py-2 w-1/2'>Player</th>
                        <th className='py-2 w-1/2'>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {results.sort((a, b) => a.place - b.place).map((r, i) => (
                        <RoundRow
                            playerId={r.playerId}
                            points={r.points}
                            advance={advance > 0 ? i < advance : null}
                            key={i}
                        />
                    ))}
                </tbody>
            </table>
        </Container>
    );
}

export default RoundTable;