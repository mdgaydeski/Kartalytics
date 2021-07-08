import * as React from 'react';
import TrackImageLink from '../components/Track/TrackImageLink';
import { Cup } from '../constants/types';
import { cupGroups } from '../tempdata/tracks';

const { useState, useEffect } = React;

const TrackList = () => {
    const [cupList, setCupList] = useState<Cup[]>([]);

    useEffect(() => {
        // fetch track list
        setCupList(cupGroups);
    }, [setCupList]);

    return (
        <>
            <h1>Select Track</h1>
            {cupList.map(cup => (
                <section key={cup.name}>
                    <h2>{cup.name}</h2>
                    <div className='grid grid-cols-4'>
                        {cup.tracks.map(track => (
                            <TrackImageLink track={track} key={track.id} />
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
}

export default TrackList;