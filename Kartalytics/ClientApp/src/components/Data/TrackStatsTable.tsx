import * as React from 'react';
import TrackStatsRow from './TrackStatsRow';

type Props = {
    playerStats: boolean;
}

const TrackStatsTable: React.FC<Props> = ({ playerStats }) => {
    return (
        <table className='table-fixed text-center w-full'>
            <thead>
                <tr>
                    <th className='w-3/12'>{ playerStats ? 'Track' : 'Player' }</th>
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
                <TrackStatsRow playerStats={playerStats} />
                <TrackStatsRow playerStats={playerStats} />
                <TrackStatsRow playerStats={playerStats} />
                <TrackStatsRow playerStats={playerStats} />
                <TrackStatsRow playerStats={playerStats} />
            </tbody>
        </table>
    );
}

export default TrackStatsTable;