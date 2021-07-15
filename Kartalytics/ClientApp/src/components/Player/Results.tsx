import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
import MatchTable from '../Data/MatchTable';
import BackToTopLink from '../Layout/BackToTopLink';
import TableOfContents from '../Layout/TableOfContents';
import { Player } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    player: Player;
}

const Results: React.FC<Props> = ({ player }) => {
    const { tournamentList } = useContext(AppContext);

    return (
        <>
            <h2>Results</h2>
            <TableOfContents sections={player.tournamentResults.map(result => {
                const tournament = tournamentList.filter(t => t._id === result.tournamentId)[0];
                return { id: tournament._id, name: tournament.name }
            })} />
            {player.tournamentResults.map(result => {
                const tournament = tournamentList.filter(t => t._id === result.tournamentId)[0];
                return (
                    <section key={result.tournamentId}>
                        <h3 id={`section-${result.tournamentId}`}>{tournament.name}</h3>
                        <p>
                            Final result:&nbsp;
                            {tournament.finalResults.filter(t => t.playerId === player.id)[0].place}
                            /{tournament.finalResults.length}
                        </p>
                        {tournament.rounds.map(r => (
                            r.roundSummary.filter(s => s.playerId === player.id).map(s => (
                                s.matches.map(m => <MatchTable matchId={m} playerId={player.id} key={m} />)
                            ))
                        ))}
                        <BackToTopLink />
                    </section>
                );
            })}
        </>
    );

}

export default Results;