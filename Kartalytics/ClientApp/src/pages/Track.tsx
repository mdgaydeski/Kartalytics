import * as React from 'react';
import { useParams } from 'react-router-dom';
import TrackStatsTable from '../components/Data/TrackStatsTable';
import AppContext from '../context/AppContext';

const { useContext } = React;

const Track = () => {
    const { id } = useParams<{ id: string }>();
    const track = useContext(AppContext).tracks.filter(t => t.id === Number(id))[0]

    return (
        <>
            <h1>{track.name}</h1>
            <TrackStatsTable playerId={0} trackId={track.id} />
        </>
    );
}

export default Track;