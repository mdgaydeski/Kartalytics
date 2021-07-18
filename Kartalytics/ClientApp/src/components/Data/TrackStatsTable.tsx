import * as React from 'react';
import TrackStatsRow from './TrackStatsRow';
import AverageDisplay from '../Filters/AverageDisplay';
import TableBorder from '../Layout/TableBorder';
import TableOptions from '../Layout/TableOptions';
import { RaceResult } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useState, useContext } = React;

type Props = {
    playerId: number;
    trackId: number;
}

const TrackStatsTable: React.FC<Props> = ({ playerId, trackId }) => {
    const [showAverageFinish, setShowAverageFinish] = useState<boolean>(true);
    const { cups, raceResults } = useContext(AppContext);
    const results = raceResults.filter(r => playerId ? r.playerId === playerId : r.trackId === trackId);

    const resultsByTrack = results.reduce((acc, r) => {
        const key = playerId ? r.trackId : r.playerId;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(r);
        return acc;
    }, [] as RaceResult[][]);

    const resultsByCup = playerId
        ? results.reduce((acc, r) => {
            const key = cups.filter(c => c.tracks.some(t => t === r.trackId))[0].id;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(r);
            return acc;
        }, [] as RaceResult[][])
        : []

    return (
        <TableBorder>
            <TableOptions>
                <AverageDisplay
                    showAverageFinish={showAverageFinish}
                    setShowAverageFinish={setShowAverageFinish}
                />
            </TableOptions>
            <table className='divide-y-4 divide-transparent my-1 table-fixed text-center w-full'>
                <thead>
                    <tr>
                        <th scope='col' className='w-4/12'>{ playerId ? 'Track' : 'Player' }</th>
                        <th scope='col' className='w-1/12'>Total</th>
                        <th scope='col' className='w-1/12'>1st</th>
                        <th scope='col' className='w-1/12'>2nd</th>
                        <th scope='col' className='w-1/12'>3rd</th>
                        <th scope='col' className='w-1/12'>4th</th>
                        <th scope='col' className='w-3/12'>Avg. {showAverageFinish ? 'Finish' : 'Points'}</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsByTrack.map((r, i) => (
                        <TrackStatsRow
                            results={r}
                            id={i}
                            type={playerId ? 'track' : 'player'}
                            showAverageFinish={showAverageFinish}
                            key={i}
                        />
                    ))}
                </tbody>
                { resultsByCup && <tbody>
                        {resultsByCup.map((r, i) => (
                            <TrackStatsRow
                                results={r}
                                id={i}
                                type='cup'
                                showAverageFinish={showAverageFinish}
                                key={i}
                            />
                        ))}
                    </tbody>
                }
                { playerId
                    ? <tbody>
                        <TrackStatsRow
                            results={results}
                            id={0}
                            type='total'
                            showAverageFinish={showAverageFinish}
                        />
                    </tbody>
                    : null
                }
            </table>
        </TableBorder>
    );
}

export default TrackStatsTable;