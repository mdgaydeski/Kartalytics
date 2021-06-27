import * as React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import SubNavButton from '../components/Layout/SubNavButton';
import Overview from '../components/Player/Overview';
import Results from '../components/Player/Results';
import TrackStats from '../components/Player/TrackStats';
import { PLAYER_OVERVIEW, PLAYER_RESULTS, PLAYER_TRACK_STATS } from '../constants/routes';

const { Suspense } = React;

const Player = () => {
    const { path, url } = useRouteMatch();

    return (
        <>
            <h1>Player</h1>
            <div className='flex mx-auto w-3/4'>
                <SubNavButton path={`${url}${PLAYER_OVERVIEW}`}>
                    Overview
                </SubNavButton>
                <SubNavButton path={`${url}${PLAYER_RESULTS}`}>
                    Results
                </SubNavButton>
                <SubNavButton path={`${url}${PLAYER_TRACK_STATS}`}>
                    By track
                </SubNavButton>
            </div>

            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Redirect exact from={path} to={`${path}${PLAYER_OVERVIEW}`} />
                    <Route path={`${path}${PLAYER_OVERVIEW}`} component={Overview} />
                    <Route path={`${path}${PLAYER_RESULTS}`} component={Results} />
                    <Route path={`${path}${PLAYER_TRACK_STATS}`} component={TrackStats} />
                </Switch>
            </Suspense>
        </>
    );
}

export default Player;