import * as React from 'react';
import MatchTable from '../Data/MatchTable';
import AssetLink from '../Layout/AssetLink';
import BackToTopLink from '../Layout/BackToTopLink';
import { Tournament } from '../../constants/types';

const { useState, useEffect } = React;

type Props = {
    playerId: number;
    tournamentId: number;
    matches: number[];
}

const TournamentResultListing: React.FC<Props> = ({ playerId, tournamentId, matches }) => {
    const [tournament, setTournament] = useState<Tournament | null>(null);
    useEffect(() => {
        fetch(`/api/tournaments/${tournamentId}`)
            .then(response => response.json())
            .then(data => setTournament(data))
            //.catch(error => handleError(error));
    }, [tournamentId, setTournament]);

    return ( tournament &&
        <section>
            <h3 id={`section-${tournamentId}`}>{tournament.name}</h3>
            <AssetLink type='tournament' id={tournamentId}>
                Tournament Breakdown
            </AssetLink>
            <p>
                Overall result:&nbsp;
                {tournament.results.filter(t => t.playerId === playerId)[0].place}
                /{tournament.results.length}
            </p>
            <p>Round results:</p>
            <ul className='list-disc pl-10'>
                {tournament.rounds.map(r => {
                    const roundResult = r.results.filter(res => res.playerId === playerId);
                    return roundResult.length > 0 && (
                        <li key={r.roundNumber}>
                            {r.name}: {roundResult[0].place}/{r.results.length}
                        </li>
                    );
                })}
            </ul>
            {matches.map(m => <MatchTable matchId={m} playerId={playerId} key={m} />)}
            <BackToTopLink />
        </section>
    );
}

export default TournamentResultListing;