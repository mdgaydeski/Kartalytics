import * as React from 'react';
import MatchTable from '../Data/MatchTable';
import { TournamentRound } from '../../constants/types';

const { Fragment } = React;

type Props = {
    rounds: TournamentRound[];
}

const Details: React.FC<Props> = ({ rounds }) => {
    return (
        <>
            <h2>Details</h2>
            { rounds.map(round => (
                <Fragment key= {round.orderNumber}>
                    <h3>{round.name}</h3>
                    { round.matches.map(matchId => (
                        <MatchTable matchId={matchId} key={matchId} />
                    ))}
                </Fragment>
            ))}
        </>
    );
}

export default Details;