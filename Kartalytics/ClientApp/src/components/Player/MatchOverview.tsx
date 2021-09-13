import * as React from 'react';
import { PLACE_LABELS } from '../../constants/constants';
import { MatchResult } from '../../constants/types';

type Props = {
    results: MatchResult[];
}

const MatchOverview: React.FC<Props> = ({ results }) => {
    const resultsByPlace = results.reduce((acc, r) => {
        acc[0] += r.points;
        acc[r.place]++;
        return acc;
    }, [0, 0, 0, 0, 0]);

    return (
        <section className='px-4 w-80'>
            <h3>Match Stats</h3>
            <ul className='list-none pl-10'>
                <li>Total matches: {results.length}</li>
                <li>Average points: {(results.length > 0 ? resultsByPlace[0] / results.length : 0).toFixed(2)}</li>
                {/*<li>Max points: 99 (Virginia 2018, Play-in A)</li>*/}
                {/*<li>Min points: 9 (Virginia 2019, Round 1 - Match D)</li>*/}
                <li>Overall place totals:
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

export default MatchOverview;