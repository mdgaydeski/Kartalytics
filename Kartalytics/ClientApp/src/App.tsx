import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import LoadingPlaceHolder from './components/Layout/LoadingPlaceholder';
import * as ROUTES from './constants/routes';
import { ContextObject, Cup, TournamentContextObject } from './constants/types';
import AppContext from './context/AppContext';

const { useState, useEffect } = React;

const Home = lazy(() => import('./pages/Home'));
const Match = lazy(() => import('./pages/Match'));
const PlayerList = lazy(() => import('./pages/PlayerList'));
const Player = lazy(() => import('./pages/Player'));
const TournamentList = lazy(() => import('./pages/TournamentList'));
const Tournament = lazy(() => import('./pages/Tournament'));
const TrackList = lazy(() => import('./pages/TrackList'));
const Track = lazy(() => import('./pages/Track'));

const App = () => {
    const [cupContextList, setCupContextList] = useState<Cup[]>([]);
    const [playerContextList, setPlayerContextList] = useState<ContextObject[]>([]);
    const [tournamentContextList, setTournamentContextList] = useState<TournamentContextObject[]>([]);
    const [trackContextList, setTrackContextList] = useState<ContextObject[]>([]);

    useEffect(() => {
        fetch('/api/cups/context')
            .then(response => response.json())
            .then(data => setCupContextList(data))
            //.catch(error => handleError(error));

        fetch('/api/players/context')
            .then(response => response.json())
            .then(data => setPlayerContextList(data))
            //.catch(error => handleError(error));

        fetch('/api/tournaments/context')
            .then(response => response.json())
            .then(data => setTournamentContextList(data))
            //.catch(error => handleError(error));

        fetch('/api/tracks/context')
            .then(response => response.json())
            .then(data => setTrackContextList(data))
            //.catch(error => handleError(error));
    }, [setCupContextList, setPlayerContextList, setTournamentContextList, setTrackContextList]);

    const contextData = {
        cups: cupContextList,
        players: playerContextList,
        tournaments: tournamentContextList,
        tracks: trackContextList
    };

    return (
        <Router>
            <AppContext.Provider value={contextData}>
                <Header />
                <main className='bg-black bg-opacity-90 p-4 pt-12 w-full min-h-screen md:px-8'>
                    <div className='max-w-5xl mx-auto'>
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
                            </Switch>
                        </Suspense>
                    </div>
                </main>
            </AppContext.Provider>
        </Router>
    );
}

export default App;
