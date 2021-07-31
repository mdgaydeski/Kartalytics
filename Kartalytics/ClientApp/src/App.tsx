import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from './components/Layout/Container';
import Header from './components/Layout/Header';
import LoadingPlaceHolder from './components/Layout/LoadingPlaceholder';
import * as ROUTES from './constants/routes';
import AppContext from './context/AppContext';

import { cups } from './tempdata/cups';
import { matches } from './tempdata/matches';
import { matchResults } from './tempdata/matchresults';
import { players } from './tempdata/players';
import { raceResults } from './tempdata/raceresults';
import { tournaments } from './tempdata/tournaments';
import { tracks } from './tempdata/tracks';

const Home = lazy(() => import('./pages/Home'));
const Match = lazy(() => import('./pages/Match'));
const PlayerList = lazy(() => import('./pages/PlayerList'));
const Player = lazy(() => import('./pages/Player'));
const TournamentList = lazy(() => import('./pages/TournamentList'));
const Tournament = lazy(() => import('./pages/Tournament'));
const TrackList = lazy(() => import('./pages/TrackList'));
const Track = lazy(() => import('./pages/Track'));

const data = {
    cups,
    matches,
    matchResults,
    players,
    raceResults,
    tournaments,
    tracks
};

const App = () => {
    return (
        <Router>
            <AppContext.Provider value={data}>
                <Header />
                <main>
                    <Suspense fallback={<LoadingPlaceHolder />}>
                        <Container>
                            <Switch>
                                <Route path={ROUTES.HOME} exact component={Home} />
                                <Route path={ROUTES.MATCH_ID} component={Match} />
                                <Route path={ROUTES.PLAYER_ID} component={Player} />
                                <Route path={ROUTES.PLAYER_LIST} component={PlayerList} />
                                <Route path={ROUTES.TOURNAMENT_ID} component={Tournament} />
                                <Route path={ROUTES.TOURNAMENT_LIST} component={TournamentList} />
                                <Route path={ROUTES.TRACK_ID} component={Track} />
                                <Route path={ROUTES.TRACK_LIST} component={TrackList} />
                            </Switch>
                        </Container>
                    </Suspense>
                </main>
            </AppContext.Provider>
        </Router>
    );
}

export default App;
