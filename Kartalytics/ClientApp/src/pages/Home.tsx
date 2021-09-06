import * as React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const Home = () => {
    return (
        <>
            <h1>Kartalytics</h1>

            <p>Welcome to <strong>Kartalytics</strong>, home of results and statistics for multiplayer tournaments featuring some of the best Mario Kart 64 players in the world, many of whom are top-ranked time trialers on the <a href='http://mariokart64.com'>Mario Kart 64 Players' Page</a>. Here you can find breakdowns of <Link to={ROUTES.TOURNAMENT_LIST}>annual tournaments</Link>, as well as analytics of the results grouped by <Link to={ROUTES.PLAYER_LIST}>player</Link> and <Link to={ROUTES.TRACK_LIST}>track</Link>.</p><br />
            <p>Click the links or use the search bar in the menu above to explore!</p>
        </>
    );
}

export default Home;