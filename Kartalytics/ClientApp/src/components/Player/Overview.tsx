import * as React from 'react';
import TournamentOverview from './TournamentOverview';
import RaceOverview from './RaceOverview';
import MatchOverview from './MatchOverview';
import { Player } from '../../constants/types';

type Props = {
    player: Player;
}

const Overview: React.FC<Props> = ({ player }) => {
    return (
        <>
            <h2>Overview</h2>
            <TournamentOverview results={player.tournamentResults} />
            <MatchOverview />
            <RaceOverview playerId={player.id} />
        </>
    );
};

export default Overview;