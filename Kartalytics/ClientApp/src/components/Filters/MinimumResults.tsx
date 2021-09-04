import * as React from 'react';
import RangeButtons from './RangeButtons';
import TableFilter from '../Layout/TableFilter';

type Props = {
    minimumResults: number;
    setProperty: (key: string, value: number) => void;
}

const MIN_RESULTS = 1;
const MAX_RESULTS = 99;

const MinimumResults: React.FC<Props> = ({ minimumResults, setProperty }) => {
    const handleChange = (value: number) => {
        value >= MIN_RESULTS && value <= MAX_RESULTS && setProperty('minimumResults', value);
    }

    return (
        <TableFilter>
            <label htmlFor='minResults'>Minimum Races:</label>
            <div className='flex ml-auto md:ml-2'>
                <input
                    type='number'
                    id='minResults'
                    className='h-7 mx-1 px-1 rounded text-black w-12'
                    name='minResults'
                    min={MIN_RESULTS}
                    max={MAX_RESULTS}
                    value={minimumResults}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(Number(e.target.value))}
                />
                <RangeButtons handleClick={(changeValue: number) => handleChange(minimumResults + changeValue)} />
            </div>
        </TableFilter>
    );
}

export default MinimumResults;