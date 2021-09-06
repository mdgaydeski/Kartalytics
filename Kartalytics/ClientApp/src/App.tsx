import React, { lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import Header from './components/Layout/Header';
import LoadingPlaceHolder from './components/Layout/LoadingPlaceholder';
import * as ROUTES from './constants/routes';
import { ContextObject, Cup, TournamentContextObject } from './constants/types';
import AppContext from './context/AppContext';
import PageError from './pages/PageError'; // cannot be lazy loaded or ErrorBoundary doesn't work

const { useState, useEffect } = React;

const Home = lazy(() => import('./pages/Home'));
const Match = lazy(() => import('./pages/Match'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PlayerList = lazy(() => import('./pages/PlayerList'));
const Player = lazy(() => import('./pages/Player'));
const TournamentList = lazy(() => import('./pages/TournamentList'));
const Tournament = lazy(() => import('./pages/Tournament'));
const TrackList = lazy(() => import('./pages/TrackList'));
const Track = lazy(() => import('./pages/Track'));

const App = () => {
    // error handling
    const handleError = useErrorHandler();
    const location = useLocation();
    const [errorBoundaryKey, setErrorBoundaryKey] = useState<number>(1);

    useEffect(() => {
        setErrorBoundaryKey(key => key + 1)
    }, [location, setErrorBoundaryKey]);

    // set context
    const [cupContextList, setCupContextList] = useState<Cup[]>([]);
    const [playerContextList, setPlayerContextList] = useState<ContextObject[]>([]);
    const [tournamentContextList, setTournamentContextList] = useState<TournamentContextObject[]>([]);
    const [trackContextList, setTrackContextList] = useState<ContextObject[]>([]);

    useEffect(() => {
        fetch('/api/cups/context')
            .then(response => response.json())
            .then(data => setCupContextList(data))
            .catch(error => handleError(error));

        fetch('/api/players/context')
            .then(response => response.json())
            .then(data => setPlayerContextList(data))
            .catch(error => handleError(error));

        fetch('/api/tournaments/context')
            .then(response => response.json())
            .then(data => setTournamentContextList(data))
            .catch(error => handleError(error));

        fetch('/api/tracks/context')
            .then(response => response.json())
            .then(data => setTrackContextList(data))
            .catch(error => handleError(error));
    }, [setCupContextList, setPlayerContextList, setTournamentContextList, setTrackContextList, handleError]);

    const contextData = {
        cups: cupContextList,
        players: playerContextList,
        tournaments: tournamentContextList,
        tracks: trackContextList
    };

    return (
        <AppContext.Provider value={contextData}>
            <Header />
            <main className='bg-black bg-opacity-90 p-4 pt-12 w-full min-h-screen md:px-8'>
                <div className='max-w-5xl mx-auto'>
                    <ErrorBoundary FallbackComponent={PageError} key={errorBoundaryKey}>
                        <Suspense fallback={<LoadingPlaceHolder />}>
                            <Switch>
                                <Route path={ROUTES.HOME} exact component={Home} />
                                <Route path={ROUTES.MATCH_ID} component={Match} />
                                <Route path={ROUTES.PLAYER_ID} component={Player} />
                                <Route path={ROUTES.PLAYER_LIST} component={PlayerList} />
                                <Route path={ROUTES.TOURNAMENT_ID} component={Tournament} />
                                <Route path={ROUTES.TOURNAMENT_LIST} component={TournamentList} />
                                <Route path={ROUTES.TRACK_ID} component={Track} />
                                <Route path={ROUTES.TRACK_LIST} component={TrackList} />
                                <Route component={NotFound} />
                            </Switch>
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </main>
        </AppContext.Provider>
    );
}

export default App;
