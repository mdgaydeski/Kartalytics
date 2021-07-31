import * as React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link to={`${ROUTES.MATCH}/1`}>Match</Link><br />
            <Link to={`${ROUTES.PLAYER}/1`}>Player</Link><br />
            <Link to={ROUTES.PLAYER_LIST}>Player List</Link><br />
            <Link to={`${ROUTES.TOURNAMENT}/1`}>Tournament</Link><br />
            <Link to={ROUTES.TOURNAMENT_LIST}>Tournament List</Link><br />
            <Link to={`${ROUTES.TRACK}/1`}>Track</Link><br />
            <Link to={ROUTES.TRACK_LIST}>Track List</Link>
        </>
    );
}

export default Home;