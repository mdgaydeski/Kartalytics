import * as React from 'react';

type Props = {
    showAverageFinish: boolean;
    setShowAverageFinish: React.Dispatch<React.SetStateAction<boolean>>;
}

const AverageDisplay: React.FC<Props> = ({ showAverageFinish, setShowAverageFinish }) => {
    const options = [
        { label: 'Finish', option: true },
        { label: 'Points', option: false }
    ];

    return (
        <>
            <p>Show average as:</p>
            {options.map((o, i) => (
                <div className='space-x-1' key={i}>
                    <input
                        type='radio'
                        id={o.label.toLowerCase()}
                        name='average'
                        value={o.label.toLowerCase()}
                        checked={showAverageFinish === o.option}
                        onChange={() => setShowAverageFinish(o.option)}
                    />
                    <label htmlFor={o.label.toLowerCase()}>{o.label}</label>
                </div>
            ))}
        </>
    );
}

export default AverageDisplay;