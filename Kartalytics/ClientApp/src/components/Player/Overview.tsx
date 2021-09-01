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
            <div className='flex flex-wrap justify-around'>
                <TournamentOverview results={player.tournamentResults} />
                <MatchOverview playerId={player.id} />
                <RaceOverview playerId={player.id} />
            </div>
        </>
    );
};

export default Overview;