import * as React from 'react';
import { Link } from 'react-router-dom';
import TrackStats from '../components/Player/TrackStats';

const Player = () => {
    return (
        <>
            <h1>Player</h1>
            <TrackStats />
        </>
    );
}

export default Player;