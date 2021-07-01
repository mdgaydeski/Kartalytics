import * as React from 'react';
import RoundTable from './RoundTable';

const PoolRoundResults = () => {
    const results = [
        { id: 1, name: 'Alice', points: 20 },
        { id: 2, name: 'Bob', points: 38 },
        { id: 3, name: 'Carol', points: 24 },
        { id: 4, name: 'David', points: 14 },
        { id: 5, name: 'Emily', points: 28 },
        { id: 6, name: 'Frank', points: 25 },
        { id: 7, name: 'Grace', points: 29 },
        { id: 8, name: 'Horatio', points: 14 }
    ];

    return (
        <div className='w-80'>
            <h3>Round 1</h3>
            <h4>Totals</h4>
            <RoundTable advance={4} results={results} />
        </div>
    );
}

export default PoolRoundResults;