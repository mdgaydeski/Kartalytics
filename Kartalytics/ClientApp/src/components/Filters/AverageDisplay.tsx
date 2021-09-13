import * as React from 'react';
import TableFilter from '../Layout/TableFilter';

type Props = {
    showAverageFinish: boolean;
    applyFilters: (obj: any) => void;
}

const AverageDisplay: React.FC<Props> = ({ showAverageFinish, applyFilters }) => {
    const options = [
        { label: 'Finish', option: true },
        { label: 'Points', option: false }
    ];

    return (
        <TableFilter>
            <p>Show average as:</p>
            <div className='flex ml-auto space-x-2 md:ml-2 '>
                {options.map((o, i) => (
                    <div className='space-x-1' key={i}>
                        <input
                            type='radio'
                            id={o.label.toLowerCase()}
                            name='average'
                            value={o.option.toString()}
                            checked={showAverageFinish === o.option}
                            onChange={() => applyFilters({ showAverageFinish: o.option })}
                        />
                        <label htmlFor={o.label.toLowerCase()}>{o.label}</label>
                    </div>
                ))}
            </div>
        </TableFilter>
    );
}

export default AverageDisplay;