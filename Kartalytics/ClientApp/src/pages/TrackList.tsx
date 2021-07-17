import * as React from 'react';
import TrackImageLink from '../components/Track/TrackImageLink';
import AppContext from '../context/AppContext';

const { useContext } = React;

const TrackList = () => {
    const { cups } = useContext(AppContext);

    return (
        <>
            <h1>Select Track</h1>
            {cups.map(c => (
                <section key={c.name}>
                    <h2>{c.name}</h2>
                    <div className='grid grid-cols-4'>
                        {c.tracks.map(trackId => (
                            <TrackImageLink trackId={trackId} key={trackId} />
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
}

export default TrackList;