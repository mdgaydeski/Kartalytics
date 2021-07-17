import * as React from 'react';
import MatchTable from '../Data/MatchTable';
import BackToTopLink from '../Layout/BackToTopLink';
import TableOfContents from '../Layout/TableOfContents';
import { TournamentRound } from '../../constants/types';

type Props = {
    rounds: TournamentRound[];
}

const Details: React.FC<Props> = ({ rounds }) => {
    return (
        <>
            <h2>Details</h2>
            <TableOfContents sections={rounds.map(r => ({ id: r.roundNumber, name: r.name}))} />
            { rounds.map(round => (
                <section key={round.roundNumber}>
                    <h3 id={`section-${round.roundNumber}`}>{round.name}</h3>
                    { round.matches.map(matchId => (
                        <MatchTable matchId={matchId} playerId={0} key={matchId} />
                    ))}
                    <BackToTopLink />
                </section>
            ))}
        </>
    );
}

export default Details;