import * as React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../constants/routes';

const TournamentList = () => {
    return (
        <>
            <h1>Tournament List</h1>
            <Link to={HOME}>Back to Home</Link>
        </>
    );
}

export default TournamentList;