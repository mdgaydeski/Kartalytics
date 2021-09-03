import * as React from 'react';
import RoundRow from './RoundRow';
import Container from '../Layout/Container';
import { Match, MatchResult, RoundResult } from '../../constants/types';

const { useState, useEffect } = React;

type Props = {
    advance: number;
    roundResults?: RoundResult[];
    matchId?: number;
}

const RoundTable: React.FC<Props> = ({ advance, roundResults, matchId }) => {
    const [match, setMatch] = useState<Match | null>(null);
    const [matchResults, setMatchResults] = useState<MatchResult[]>([]);

    useEffect(() => {
        matchId && fetch(`/api/matches/${matchId}`)
            .then(response => response.json())
            .then(data => setMatch(data))
            //.catch(error => handleError(error));

        matchId && fetch(`/api/matches/${matchId}/results`)
            .then(response => response.json())
            .then(data => setMatchResults(data))
            //.catch(error => handleError(error));
    }, [matchId, setMatch, setMatchResults]);

    return (
        <>
            <h4>{match ? match.name : 'Totals'}</h4>
            <Container className='pb-4'>
                <table className='table text-center w-full'>
                    <thead>
                        <tr>
                            <th className='py-2 w-1/2'>Player</th>
                            <th className='py-2 w-1/2'>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roundResults
                            ? roundResults.sort((a, b) => a.place - b.place).map((r, i) => (
                                <RoundRow
                                    playerId={r.playerId}
                                    points={r.points}
                                    advance={advance > 0 ? i < advance : null}
                                    key={i}
                                />
                            ))
                            : matchResults.sort((a, b) => a.place - b.place).map((m, i) => (
                                <RoundRow
                                    playerId={m.playerId}
                                    points={[m.points]}
                                    advance={advance > 0 ? i < advance : null}
                                    key={i}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </Container>
        </>
    );
}

export default RoundTable;