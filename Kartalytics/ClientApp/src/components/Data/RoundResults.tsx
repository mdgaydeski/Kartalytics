import * as React from 'react';
import RoundTable from './RoundTable';
import { TournamentRound } from '../../constants/types';

type Props = {
    round: TournamentRound;
}

const RoundResults: React.FC<Props> = ({ round }) => {
    const advance = round.totalAdvance ? round.totalAdvance : 0;

    return (
        <div className='px-4 w-80'>
            <h3>{round.name}</h3>
            {round.isPoolRound
                ? <RoundTable advance={advance} roundResults={round.results} />
                : <>
                    {round.matches.map(matchId => {
                        return (
                            <div key={matchId}>
                                <RoundTable advance={advance / round.matches.length} matchId={matchId} />
                            </div>
                        );
                    })}
                </>
            }
        </div>
    );
}

export default RoundResults;