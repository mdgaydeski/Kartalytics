import * as React from 'react';
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import LoadingPlaceholder from '../components/Layout/LoadingPlaceholder';
import SubNavButton from '../components/Layout/SubNavButton';
import SubNavGroup from '../components/Layout/SubNavGroup';
import Results from '../components/Tournament/Results';
import Bracket from '../components/Tournament/Bracket';
import Details from '../components/Tournament/Details';
import { TOURNAMENT_RESULTS, TOURNAMENT_BRACKET, TOURNAMENT_DETAILS } from '../constants/routes';
import { Tournament } from '../constants/types';

const { Suspense, useState, useEffect } = React;

const Tournament = () => {
    const handleError = useErrorHandler();
    const { path, url } = useRouteMatch();
    const { id } = useParams<{ id: string }>();

    const [tournament, setTournament] = useState<Tournament | null>(null);

    useEffect(() => {
        let mounted = true;
        fetch(`/api/tournaments/${id}`)
            .then(response => response.json())
            .then(data => mounted && setTournament(data))
            .catch(error => handleError(error));

        return () => { mounted = false }
    }, [id, setTournament, handleError]);

    return (
        tournament && <>
            <h1>{tournament.name}</h1>
            <SubNavGroup>
                <SubNavButton path={`${url}${TOURNAMENT_RESULTS}`}>
                    Results
                </SubNavButton>
                <SubNavButton path={`${url}${TOURNAMENT_BRACKET}`}>
                    Bracket
                </SubNavButton>
                <SubNavButton path={`${url}${TOURNAMENT_DETAILS}`}>
                    Details
                </SubNavButton>
            </SubNavGroup>

            <Suspense fallback={<LoadingPlaceholder />}>
                <Switch>
                    <Redirect exact from={path} to={`${path}${TOURNAMENT_RESULTS}`} />
                    <Route path={`${path}${TOURNAMENT_RESULTS}`}>
                        <Results results={tournament.results} rounds={tournament.rounds} />
                    </Route>
                    <Route path={`${path}${TOURNAMENT_BRACKET}`}>
                        <Bracket rounds={tournament.rounds} />
                    </Route>
                    <Route path={`${path}${TOURNAMENT_DETAILS}`}>
                        <Details rounds={tournament.rounds} />
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
}

export default Tournament;