import * as React from 'react';
import { useParams } from 'react-router-dom';
import TrackStatsTable from '../components/Data/TrackStatsTable';
import AppContext from '../context/AppContext';

const { useContext } = React;

const Track = () => {
    const { id } = useParams<{ id: string }>();
    const track = useContext(AppContext).tracks.find(t => t.id === Number(id));

    return track
        ? (
            <>
                <h1>{track.name}</h1>
                <TrackStatsTable trackId={track.id} />
            </>
        )
        : <></>
}

export default Track;