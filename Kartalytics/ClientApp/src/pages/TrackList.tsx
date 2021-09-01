import * as React from 'react';
import Container from '../components/Layout/Container';
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
                    <Container>
                        <div className='grid grid-cols-2 py-4 md:grid-cols-4'>
                            {c.tracks.map(trackId => (
                                <TrackImageLink trackId={trackId} key={trackId} />
                            ))}
                        </div>
                    </Container>
                </section>
            ))}
        </>
    );
}

export default TrackList;