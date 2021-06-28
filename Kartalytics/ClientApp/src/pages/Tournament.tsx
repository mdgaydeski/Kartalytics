import * as React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import SubNavButton from '../components/Layout/SubNavButton';
import Results from '../components/Tournament/Results';
import Bracket from '../components/Tournament/Bracket';
import Details from '../components/Tournament/Details';
import { TOURNAMENT_RESULTS, TOURNAMENT_BRACKET, TOURNAMENT_DETAILS } from '../constants/routes';

const { Suspense } = React;

const Player = () => {
    const { path, url } = useRouteMatch();

    return (
        <>
            <h1>Virginia 2019</h1>
            <div className='flex mx-auto w-3/4'>
                <SubNavButton path={`${url}${TOURNAMENT_RESULTS}`}>
                    Results
                </SubNavButton>
                <SubNavButton path={`${url}${TOURNAMENT_BRACKET}`}>
                    Bracket
                </SubNavButton>
                <SubNavButton path={`${url}${TOURNAMENT_DETAILS}`}>
                    Details
                </SubNavButton>
            </div>

            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Redirect exact from={path} to={`${path}${TOURNAMENT_RESULTS}`} />
                    <Route path={`${path}${TOURNAMENT_RESULTS}`} component={Results} />
                    <Route path={`${path}${TOURNAMENT_BRACKET}`} component={Bracket} />
                    <Route path={`${path}${TOURNAMENT_DETAILS}`} component={Details} />
                </Switch>
            </Suspense>
        </>
    );
}

export default Player;