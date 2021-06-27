import * as React from 'react';
import TrackStatsTable from '../components/Data/TrackStatsTable';

const Track = () => {
    return (
        <>
            <h1>Track Name</h1>
            <TrackStatsTable playerStats={false} />
        </>
    );
}

export default Track;