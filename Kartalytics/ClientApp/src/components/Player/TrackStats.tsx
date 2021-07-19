import * as React from 'react';
import TrackStatsTable from '../Data/TrackStatsTable';

type Props = {
    playerId: number;
}

const TrackStats: React.FC<Props> = ({ playerId }) => {
    return (
        <>
            <h2>Track Stats</h2>
            <TrackStatsTable playerId={playerId} />
        </>
    );
}

export default TrackStats;