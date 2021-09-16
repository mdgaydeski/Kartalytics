import * as React from 'react';
import TableOfContents from '../Layout/TableOfContents';
import { Player } from '../../constants/types';
import AppContext from '../../context/AppContext';
import TournamentResultListing from './TournamentResultListing';

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
                const tournament = tournaments.find(t => t.id === result.tournamentId);
                return {
                    id: tournament ? tournament.id : 0,
                    name: tournament ? tournament.name: ''
                }
            })} />
            {player.tournamentResults.map(result => (
                <TournamentResultListing
                    playerId={player.id}
                    tournamentId={result.tournamentId}
                    matches={result.matches}
                    key={result.tournamentId}
                />
            ))}
        </>
    );

}

export default Results;