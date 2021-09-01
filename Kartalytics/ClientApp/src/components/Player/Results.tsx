import * as React from 'react';
import MatchTable from '../Data/MatchTable';
import AssetLink from '../Layout/AssetLink';
import BackToTopLink from '../Layout/BackToTopLink';
import TableOfContents from '../Layout/TableOfContents';
import { Player } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    player: Player;
}

const Results: React.FC<Props> = ({ player }) => {
    const { tournaments } = useContext(AppContext);

    return (
        <>
            <h2>Results</h2>
            <TableOfContents sections={player.tournamentResults.map(result => {
                const tournament = tournaments.filter(t => t.id === result.tournamentId)[0];
                return { id: tournament.id, name: tournament.name }
            })} />
            {player.tournamentResults.map(result => {
                const tournament = tournaments.filter(t => t.id === result.tournamentId)[0];
                return (
                    <section key={result.tournamentId}>
                        <h3 id={`section-${result.tournamentId}`}>{tournament.name}</h3>
                        <AssetLink type='tournament' id={result.tournamentId}>
                            Tournament Breakdown
                        </AssetLink>
                        <p>
                            Overall result:&nbsp;
                            {tournament.results.filter(t => t.playerId === player.id)[0].place}
                            /{tournament.results.length}
                        </p>
                        <p>Round results:</p>
                        <ul className='list-disc pl-10'>
                            {tournament.rounds.map(r => {
                                const roundResult = r.results.filter(res => res.playerId === player.id);
                                return roundResult.length > 0 && (
                                    <li key={r.roundNumber}>
                                        {r.name}: {roundResult[0].place}/{r.results.length}
                                    </li>
                                );
                            })}
                        </ul>
                        {result.matches.map(m => <MatchTable matchId={m} playerId={player.id} key={m} />)}
                        <BackToTopLink />
                    </section>
                );
            })}
        </>
    );

}

export default Results;