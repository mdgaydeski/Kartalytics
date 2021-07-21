import * as React from 'react';
import TableFilter from '../Layout/TableFilter';

type Props = {
    showAverageFinish: boolean;
    setProperty: (key: string, value: boolean) => void;
}

const AverageDisplay: React.FC<Props> = ({ showAverageFinish, setProperty }) => {
    const options = [
        { label: 'Finish', option: true },
        { label: 'Points', option: false }
    ];

    return (
        <TableFilter>
            <p>Show average as:</p>
            {options.map((o, i) => (
                <div className='space-x-1' key={i}>
                    <input
                        type='radio'
                        id={o.label.toLowerCase()}
                        name='average'
                        value={o.option.toString()}
                        checked={showAverageFinish === o.option}
                        onChange={() => setProperty('showAverageFinish', o.option)}
                    />
                    <label htmlFor={o.label.toLowerCase()}>{o.label}</label>
                </div>
            ))}
        </TableFilter>
    );
}

export default AverageDisplay;