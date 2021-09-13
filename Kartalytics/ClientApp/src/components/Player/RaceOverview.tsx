import * as React from 'react';
import { PLACE_LABELS } from '../../constants/constants';
import { RaceResult } from '../../constants/types';

type Props = {
    results: RaceResult[];
}

const RaceOverview: React.FC<Props> = ({ results }) => {
    const resultsByPlace = results.reduce((acc, r) => {
        acc[0] += r.place;
        acc[r.place]++;
        return acc;
    }, [0, 0, 0, 0, 0]);

    return (
        <section className='px-4 w-80'>
            <h3>Race Stats</h3>
            <ul className='list-none pl-10'>
                <li>Total races: {results.length}</li>
                <li>Average finish: {(results.length > 0 ? resultsByPlace[0] / results.length : 0).toFixed(3)}</li>
                <li>Place totals:
                    <ul className='list-disc pl-10'>
                        {resultsByPlace.slice(1).map((r, i) => (
                            <li key={i}>
                                {PLACE_LABELS[i]}:&nbsp;
                                {r} ({(results.length > 0 ? r / results.length * 100 : 0).toFixed(2)}%)
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </section>
    );
}

export default RaceOverview;