import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
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
            <TableOfContents sections={rounds.map(r => ({ id: r.orderNumber, name: r.name}))} />
            { rounds.map(round => (
                <section key={round.orderNumber}>
                    <h3 id={`section-${round.orderNumber}`}>{round.name}</h3>
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