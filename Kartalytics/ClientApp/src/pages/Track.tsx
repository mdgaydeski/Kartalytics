import * as React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../constants/routes';

const Track = () => {
    return (
        <>
            <h1>Track</h1>
            <Link to={HOME}>Back to Home</Link>
        </>
    );
}

export default Track;