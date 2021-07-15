import * as React from 'react';
import { Switch, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom';
import LoadingPlaceholder from '../components/Layout/LoadingPlaceholder';
import SubNavButton from '../components/Layout/SubNavButton';
import SubNavGroup from '../components/Layout/SubNavGroup';
import Results from '../components/Tournament/Results';
import Bracket from '../components/Tournament/Bracket';
import Details from '../components/Tournament/Details';
import { TOURNAMENT_RESULTS, TOURNAMENT_BRACKET, TOURNAMENT_DETAILS } from '../constants/routes';
import { Tournament } from '../constants/types';
import AppContext from '../context/AppContext';

const { Suspense, useState, useEffect, useContext } = React;

const Tournament = () => {
    const { path, url } = useRouteMatch();
    const { id } = useParams<{ id: string }>();

    const [tournament, setTournament] = useState<Tournament | null>(null);
    const { tournamentList } = useContext(AppContext);

    useEffect(() => {
        const currentTournament = tournamentList.filter(t => t._id === Number(id))[0];
        setTournament(currentTournament);
    }, [id, setTournament, tournamentList]);

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
                        <Results results={tournament.finalResults} />
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