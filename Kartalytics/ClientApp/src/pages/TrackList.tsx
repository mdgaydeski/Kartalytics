import * as React from 'react';
import TrackImageLink from '../components/Track/TrackImageLink';
import AppContext from '../context/AppContext';

const { useContext } = React;

const TrackList = () => {
    const { cupList } = useContext(AppContext);

    return (
        <>
            <h1>Select Track</h1>
            {cupList.map(cup => (
                <section key={cup.name}>
                    <h2>{cup.name}</h2>
                    <div className='grid grid-cols-4'>
                        {cup.tracks.map(trackId => (
                            <TrackImageLink trackId={trackId} key={trackId} />
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
}

export default TrackList;