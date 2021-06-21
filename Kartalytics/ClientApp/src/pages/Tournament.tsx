import * as React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../constants/routes';

const Tournament = () => {
    return (
        <>
            <h1>Tournament</h1>
            <Link to={HOME}>Back to Home</Link>
        </>
    );
}

export default Tournament;