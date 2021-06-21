import * as React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../constants/routes';

const PlayerList = () => {
    return (
        <>
            <h1>Player List</h1>
            <Link to={HOME}>Back to Home</Link>
        </>
    );
}

export default PlayerList;