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
    const results = useContext(AppContext).resultList
        .filter(r => playerId ? r.playerId === playerId : r.trackId === trackId)
        .reduce((acc, r) => {
            const key = playerId ? r.trackId : r.playerId;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(r);
            return acc;
        }, [] as Result[][]);

    // TODO: include cup/overall totals for player summary

    return (
        <table className='table-fixed text-center w-full'>
            <thead>
                <tr>
                    <th className='w-3/12'>{ playerId ? 'Track' : 'Player' }</th>
                    <th className='w-1/12'>Total</th>
                    <th className='w-1/12'>1st</th>
                    <th className='w-1/12'>2nd</th>
                    <th className='w-1/12'>3rd</th>
                    <th className='w-1/12'>4th</th>
                    <th className='w-2/12'>Avg. pts</th>
                    <th className='w-2/12'>Avg. finish</th>
                </tr>
            </thead>
            <tbody>
                {results.map((r, i) => (
                    <TrackStatsRow results={r} playerId={playerId ? 0 : i} trackId={playerId ? i : 0} key={i} />
                ))}
            </tbody>
        </table>
    );
}

export default TrackStatsTable;