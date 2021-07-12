import * as React from 'react';
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom';
import LoadingPlaceholder from '../components/Layout/LoadingPlaceholder';
import SubNavButton from '../components/Layout/SubNavButton';
import Overview from '../components/Player/Overview';
import Results from '../components/Player/Results';
import TrackStats from '../components/Player/TrackStats';
import { PLAYER_OVERVIEW, PLAYER_RESULTS, PLAYER_TRACK_STATS } from '../constants/routes';
import { Player } from '../constants/types';
import AppContext from '../context/AppContext';

const { Suspense, useState, useEffect, useContext } = React;

const Player = () => {
    const { path, url } = useRouteMatch();
    const { id } = useParams<{ id: string }>();

    const [player, setPlayer] = useState<Player | null>(null);
    const { playerList } = useContext(AppContext);

    useEffect(() => {
        const currentTournament = playerList.filter(p => p.id === Number(id))[0];
        setPlayer(currentTournament);
    }, [id, setPlayer, playerList]);

    return (
        player && <>
            <h1>{player.name}</h1>
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
                        <TrackStats />
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
}

export default Player;