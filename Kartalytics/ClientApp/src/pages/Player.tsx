import * as React from 'react';
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import LoadingPlaceholder from '../components/Layout/LoadingPlaceholder';
import SubNavButton from '../components/Layout/SubNavButton';
import SubNavGroup from '../components/Layout/SubNavGroup';
import Overview from '../components/Player/Overview';
import Results from '../components/Player/Results';
import TrackStats from '../components/Player/TrackStats';
import { PLAYER_OVERVIEW, PLAYER_RESULTS, PLAYER_TRACK_STATS } from '../constants/routes';
import { Player } from '../constants/types';

const { Suspense, useState, useEffect } = React;

const Player = () => {
    const handleError = useErrorHandler();
    const { path, url } = useRouteMatch();
    const { id } = useParams<{ id: string }>();

    const [player, setPlayer] = useState<Player | null>(null);

    useEffect(() => {
        let mounted = true;
        fetch(`/api/players/${id}`)
            .then(response => response.json())
            .then(data => mounted && setPlayer(data))
            .catch(error => handleError(error));

        return () => { mounted = false }
    }, [id, setPlayer, handleError]);

    return (
        player && <>
            <h1>{player.name}</h1>
            <SubNavGroup>
                <SubNavButton path={`${url}${PLAYER_OVERVIEW}`}>
                    Overview
                </SubNavButton>
                <SubNavButton path={`${url}${PLAYER_RESULTS}`}>
                    Results
                </SubNavButton>
                <SubNavButton path={`${url}${PLAYER_TRACK_STATS}`}>
                    By track
                </SubNavButton>
            </SubNavGroup>

            <Suspense fallback={<LoadingPlaceholder />}>
                <Switch>
                    <Redirect exact from={path} to={`${path}${PLAYER_OVERVIEW}`} />
                    <Route path={`${path}${PLAYER_OVERVIEW}`}>
                        <Overview player={player} />
                    </Route>
                    <Route path={`${path}${PLAYER_RESULTS}`}>
                        <Results player={player} />
                    </Route>
                    <Route path={`${path}${PLAYER_TRACK_STATS}`}>
                        <TrackStats playerId={player.id} />
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
}

export default Player;