import * as React from 'react';
import RoundTable from './RoundTable';
import { TournamentRound } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    round: TournamentRound;
}

const RoundResults: React.FC<Props> = ({ round }) => {
    const { matchList } = useContext(AppContext);

    return (
        <div className='w-80'>
            <h3>{round.name}</h3>
            {
                round.roundTotals
                    ? <>
                        <h4>Totals</h4>
                        <RoundTable advance={round.totalAdvance} results={round.roundTotals} />
                    </>
                    : <>
                        {round.matches.map((matchId) => {
                            const match = matchList.filter(m => m.id === matchId)[0];
                            const results = match.results.map(m => ({
                                playerId: m.playerId,
                                points: m.points
                            }))
                            return (
                                <div key={matchId}>
                                    <h4>{match.name}</h4>
                                    <RoundTable advance={round.totalAdvance / round.matches.length} results={results} />
                                </div>
                            );
                        })}
                    </>
            }
        </div>
    );
}

export default RoundResults;