import * as React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../constants/routes';

const Player = () => {
    return (
        <>
            <h1>Player</h1>
            <Link to={HOME}>Back to Home</Link>
        </>
    );
}

export default Player;