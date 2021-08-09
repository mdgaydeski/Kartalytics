import * as React from 'react';
import TableFilter from '../Layout/TableFilter';

type Props = {
    highlightedPlace: number;
    matchId: number;
    places: number;
    handleChange: (value: number) => void;
}

const HighlightPlace: React.FC<Props> = ({ highlightedPlace, matchId, places, handleChange }) => {
    const elementIds = [];
    for (let i = 0; i <= places; i++) {
        elementIds.push(`highlight-${i === 0 ? 'none' : i}`);
    }

    return (
        <TableFilter>
            <p>Highlight position:</p>
            {elementIds.map((e, i) => (
                <div className='space-x-1' key={i}>
                    <input
                        type='radio'
                        id={`${e}-${matchId}`}
                        name={`highlight-${matchId}`}
                        value={i}
                        checked={highlightedPlace === i}
                        onChange={() => handleChange(i)}
                    />
                    <label htmlFor={`${e}-${matchId}`}>{i === 0 ? 'None' : i}</label>
                </div>
            ))}
        </TableFilter>
    );
}

export default HighlightPlace;