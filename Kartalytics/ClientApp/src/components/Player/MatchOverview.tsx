import * as React from 'react';
import Container from '../Layout/Container';
import { PLACE_LABELS } from '../../constants/constants';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    playerId: number;
}

const MatchOverview: React.FC<Props> = ({ playerId }) => {
    const { matchResults } = useContext(AppContext);
    const results = matchResults.filter(m => m.playerId === playerId);
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
                <li>Average points: {(resultsByPlace[0] / results.length).toFixed(2)}</li>
                {/*<li>Max points: 99 (Virginia 2018, Play-in A)</li>*/}
                {/*<li>Min points: 9 (Virginia 2019, Round 1 - Match D)</li>*/}
                <li>Overall place totals:
                    <ul className='list-disc pl-10'>
                        {resultsByPlace.slice(1).map((r, i) => (
                            <li key={i}>
                                {PLACE_LABELS[i]}:&nbsp;
                                {r} ({(r / results.length * 100).toFixed(2)}%)
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </section>
    );
}

export default MatchOverview;