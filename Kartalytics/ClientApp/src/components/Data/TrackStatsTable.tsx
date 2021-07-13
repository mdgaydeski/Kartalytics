import * as React from 'react';
import TrackStatsRow from './TrackStatsRow';
import { Result } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    playerId: number;
    trackId: number;
}

const TrackStatsTable: React.FC<Props> = ({ playerId, trackId }) => {
    const { cupList, resultList } = useContext(AppContext);
    const results = resultList.filter(r => playerId ? r.playerId === playerId : r.trackId === trackId);

    const resultsByTrack = results.reduce((acc, r) => {
        const key = playerId ? r.trackId : r.playerId;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(r);
        return acc;
    }, [] as Result[][]);

    const resultsByCup = playerId
        ? results.reduce((acc, r) => {
            const key = cupList.filter(c => c.tracks.some(t => t === r.trackId))[0].id;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(r);
            return acc;
        }, [] as Result[][])
        : []

    return (
        <table className='table-fixed text-center w-full'>
            <thead>
                <tr>
                    <th scope='col' className='w-3/12'>{ playerId ? 'Track' : 'Player' }</th>
                    <th scope='col' className='w-1/12'>Total</th>
                    <th scope='col' className='w-1/12'>1st</th>
                    <th scope='col' className='w-1/12'>2nd</th>
                    <th scope='col' className='w-1/12'>3rd</th>
                    <th scope='col' className='w-1/12'>4th</th>
                    <th scope='col' className='w-2/12'>Avg. pts</th>
                    <th scope='col' className='w-2/12'>Avg. finish</th>
                </tr>
            </thead>
            <tbody>
                {resultsByTrack.map((r, i) => (
                    <TrackStatsRow results={r} id={i} type={playerId ? 'track' : 'player'} key={i} />
                ))}
            </tbody>
            { resultsByCup && <tbody className='border-t border-gray-400'>
                    {resultsByCup.map((r, i) => (
                        <TrackStatsRow results={r} id={i} type='cup' key={i} />
                    ))}
                </tbody>
            }
            { playerId
                ? <tbody className='border-t border-gray-400'>
                    <TrackStatsRow results={results} id={0} type='total' />
                </tbody>
                : null
            }
        </table>
    );
}

export default TrackStatsTable;