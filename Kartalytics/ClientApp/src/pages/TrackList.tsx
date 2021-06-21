import * as React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../constants/routes';

const TrackList = () => {
    return (
        <>
            <h1>Track List</h1>
            <Link to={HOME}>Back to Home</Link>
        </>
    );
}

export default TrackList;