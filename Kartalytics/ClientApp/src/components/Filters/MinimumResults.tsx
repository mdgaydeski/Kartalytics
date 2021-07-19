﻿import * as React from 'react';

type Props = {
    minimumResults: number;
    setMinimumResults: React.Dispatch<React.SetStateAction<number>>;
}

const MinimumResults: React.FC<Props> = ({ minimumResults, setMinimumResults }) => {
    return (
        <>
            <label htmlFor='minResults'>Minimum Races:</label>
            <input
                type='number'
                id='minResults'
                className='px-1 rounded text-black w-12'
                name='minResults'
                min={1}
                max={99}
                value={minimumResults}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinimumResults(Number(e.target.value))}
            />
        </>
    );
}

export default MinimumResults;