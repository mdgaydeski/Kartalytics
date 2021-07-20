import * as React from 'react';

type Props = {
    startYear: number;
    endYear: number;
    setStartYear: React.Dispatch<React.SetStateAction<number>>;
    setEndYear: React.Dispatch<React.SetStateAction<number>>;
}

const YearRange: React.FC<Props> = ({ startYear, endYear, setStartYear, setEndYear }) => {
    const MIN_YEAR_VALUE = 2007;
    const MAX_YEAR_VALUE = new Date().getFullYear();

    const handleChange = (year: number, isStartYear: boolean) => {
        if (isStartYear) {
            setStartYear(year);
            year > endYear && setEndYear(year);
        } else {
            setEndYear(year);
            year < startYear && setStartYear(year);
        }
    }

    return (
        <>
            <p>Filter Years:</p>
            <label htmlFor='startYear'>From:</label>
            <input
                type='number'
                id='startYear'
                className='px-1 rounded text-black w-20'
                name='startYear'
                min={MIN_YEAR_VALUE}
                max={MAX_YEAR_VALUE}
                value={startYear}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(Number(e.target.value), true)}
            />
            <label htmlFor='endYear'>To:</label>
            <input
                type='number'
                id='endYear'
                className='px-1 rounded text-black w-20'
                name='endYear'
                min={MIN_YEAR_VALUE}
                max={MAX_YEAR_VALUE}
                value={endYear}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(Number(e.target.value), false)}
            />
        </>
    );
}

export default YearRange;