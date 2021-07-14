import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from './components/Layout/Container';
import Header from './components/Layout/Header';
import LoadingPlaceHolder from './components/Layout/LoadingPlaceholder';
import * as ROUTES from './constants/routes';
import AppContext from './context/AppContext';

import { matches } from './tempdata/matches';
import { players } from './tempdata/players';
import { results } from './tempdata/results';
import { tournaments } from './tempdata/tournaments';
import { cups, tracks } from './tempdata/tracks';

const Home = lazy(() => import('./pages/Home'));
const PlayerList = lazy(() => import('./pages/PlayerList'));
const Player = lazy(() => import('./pages/Player'));
const TournamentList = lazy(() => import('./pages/TournamentList'));
const Tournament = lazy(() => import('./pages/Tournament'));
const TrackList = lazy(() => import('./pages/TrackList'));
const Track = lazy(() => import('./pages/Track'));

const data = {
    cupList: cups,
    matchList: matches,
    playerList: players,
    resultList: results,
    tournamentList: tournaments,
    trackList: tracks
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
