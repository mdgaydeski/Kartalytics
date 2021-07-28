import * as React from 'react';
import { PLACE_LABELS } from '../../constants/constants';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    playerId: number
}

const RaceOverview: React.FC<Props> = ({ playerId }) => {
    const { raceResults } = useContext(AppContext);
    const results = raceResults.filter(r => r.playerId === playerId);
    const resultsByPlace = results.reduce((acc, r) => {
        acc[0] += r.place;
        acc[r.place]++;
        return acc;
    }, [0, 0, 0, 0, 0]);

    return (
        <>
            <h3>Race Stats</h3>
            <ul className='list-none pl-10'>
                <li>Total races: {results.length}</li>
                <li>Average finish: {(resultsByPlace[0] / results.length).toFixed(3)}</li>
                <li>Place totals:
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
        </>
    );
}

export default RaceOverview;