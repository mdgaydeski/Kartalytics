import * as React from 'react';
import RoundTable from './RoundTable';
import { TournamentRound } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    round: TournamentRound;
}

const RoundResults: React.FC<Props> = ({ round }) => {
    const { matches } = useContext(AppContext);
    const advance = round.totalAdvance ? round.totalAdvance : 0;

    return (
        <div className='w-80'>
            <h3>{round.name}</h3>
            {round.isPoolRound
                ? <>
                    <h4>Totals</h4>
                    <RoundTable advance={advance} results={round.results} />
                </>
                : <>
                    {round.matches.map(matchId => {
                        const match = matches.filter(m => m.id === matchId)[0];
                        const results = round.results.filter(r => match.players.indexOf(r.playerId) > -1);
                        return (
                            <div key={matchId}>
                                <h4>{match.name}</h4>
                                <RoundTable advance={advance / round.matches.length} results={results} />
                            </div>
                        );
                    })}
                </>
            }
        </div>
    );
}

export default RoundResults;