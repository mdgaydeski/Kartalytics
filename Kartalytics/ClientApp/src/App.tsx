import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from './components/Layout/Container';
import Header from './components/Layout/Header';
import LoadingPlaceHolder from './components/Layout/LoadingPlaceholder';
import * as ROUTES from './constants/routes';

const Home = lazy(() => import('./pages/Home'));
const PlayerList = lazy(() => import('./pages/PlayerList'));
const Player = lazy(() => import('./pages/Player'));
const TournamentList = lazy(() => import('./pages/TournamentList'));
const Tournament = lazy(() => import('./pages/Tournament'));
const TrackList = lazy(() => import('./pages/TrackList'));
const Track = lazy(() => import('./pages/Track'));

const App = () => {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
