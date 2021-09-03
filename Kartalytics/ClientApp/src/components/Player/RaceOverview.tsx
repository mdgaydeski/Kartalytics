﻿import * as React from 'react';
import { PLACE_LABELS } from '../../constants/constants';
import { RaceResult } from '../../constants/types';

const { useState, useEffect } = React;

type Props = {
    playerId: number
}

const RaceOverview: React.FC<Props> = ({ playerId }) => {
    const [results, setResults] = useState<RaceResult[]>([]);

    useEffect(() => {
        fetch(`/api/raceresults/player/${playerId}`)
            .then(response => response.json())
            .then(data => setResults(data))
            //.catch(error => handleError(error));
    }, [playerId, setResults]);

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
        </section>
    );
}

export default RaceOverview;