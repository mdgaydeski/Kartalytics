import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { PlayerResult } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    results: PlayerResult[];
}

const TournamentOverview: React.FC<Props> = ({ results }) => {
    const { tournaments } = useContext(AppContext);
    const averageFinish = results.length > 0 ? results.reduce((acc, r) => acc += r.place, 0) / results.length : 0;

    return (
        <section className='px-4 w-80'>
            <h3>Tournament Stats</h3>
            <ul className='list-none pl-10'>
                <li>Tournaments played: {results.length}</li>
                <li>Average finish: {averageFinish.toFixed(2)}</li>
                {results.length > 0 &&
                    <li>Results:
                        <ul className='list-disc pl-10'>
                            {results.map(r => {
                                const tournament = tournaments.filter(t => t.id === r.tournamentId)[0];
                                return (
                                    <li key={r.tournamentId}>
                                        <AssetLink type='tournament' id={r.tournamentId}>
                                            {tournament.name}
                                        </AssetLink>
                                        : {r.place}/{tournament.totalPlayers}
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                }
            </ul>
        </section>
    );
}

export default TournamentOverview;