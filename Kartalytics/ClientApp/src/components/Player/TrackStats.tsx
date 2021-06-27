import * as React from 'react';
import TrackStatsTable from '../Data/TrackStatsTable';

const TrackStats = () => {
    return (
        <>
            <h2>Track Stats</h2>
            <TrackStatsTable playerStats={true} />
        </>
    );
}

export default TrackStats;