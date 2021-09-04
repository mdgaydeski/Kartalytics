import * as React from 'react';
import RangeButtons from './RangeButtons';
import TableFilter from '../Layout/TableFilter';

type Props = {
    startYear: number;
    endYear: number;
    setProperty: (key: string, value: number) => void;
}

const YearRange: React.FC<Props> = ({ startYear, endYear, setProperty }) => {
    const MIN_YEAR_VALUE = 2007;
    const MAX_YEAR_VALUE = new Date().getFullYear();

    const handleChange = (year: number, isStartYear?: boolean) => {
        if (isStartYear) {
            setProperty('startYear', year);
            year > endYear && setProperty('endYear', year);
        } else {
            setProperty('endYear', year);
            year < startYear && setProperty('startYear', year);
        }
    }

    return (
        <TableFilter>
            <p>Filter Years:</p>
            <div className='flex ml-auto md:ml-2'>
                <label htmlFor='startYear'>From:</label>
                <input
                    type='number'
                    id='startYear'
                    className='h-7 mx-1 px-1 rounded text-black w-16'
                    name='startYear'
                    min={MIN_YEAR_VALUE}
                    max={MAX_YEAR_VALUE}
                    value={startYear}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(Number(e.target.value), true)}
                />
                <RangeButtons handleClick={(changeValue: number) => handleChange(startYear + changeValue, true)} />
            </div>
            <div className='flex ml-auto md:ml-2'>
                <label htmlFor='endYear'>To:</label>
                <input
                    type='number'
                    id='endYear'
                    className='h-7 mx-1 px-1 rounded text-black w-16'
                    name='endYear'
                    min={MIN_YEAR_VALUE}
                    max={MAX_YEAR_VALUE}
                    value={endYear}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(Number(e.target.value))}
                />
                <RangeButtons handleClick={(changeValue: number) => handleChange(endYear + changeValue)} />
            </div>
        </TableFilter>
    );
}

export default YearRange;