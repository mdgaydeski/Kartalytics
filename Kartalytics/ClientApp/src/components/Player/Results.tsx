import * as React from 'react';
import MatchTable from '../Data/MatchTable';
import { Player } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { Fragment, useContext } = React;

type Props = {
    player: Player;
}

const Results: React.FC<Props> = ({ player }) => {
    const { tournamentList } = useContext(AppContext);

    return (
        <>
            <h2>Results</h2>
            {player.tournamentResults.map(result => {
                const tournament = tournamentList.filter(t => t._id === result.tournamentId)[0];
                return (
                    <Fragment key={result.tournamentId}>
                        <h3>{tournament.name}</h3>
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
                    </Fragment>
                );
            })}
        </>
    );

}

export default Results;