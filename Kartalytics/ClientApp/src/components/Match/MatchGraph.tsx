import * as React from 'react';
import { LineChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { GRAPH_LINE_PROPERTIES } from '../../constants/constants';
import AppContext from '../../context/AppContext';
import { getProgressivePointTotals } from '../../utils';

const { useState, useEffect, useContext } = React;

type Props = {
    matchId: number;
}

type ResultSet = {
    [key: string]: any;
}

const MatchGraph: React.FC<Props> = ({ matchId }) => {
    const [results, setResults] = useState<ResultSet[]>([]);
    const [playerList, setPlayerList] = useState<string[]>([]);
    const { cups, matches, matchResults, players, tracks } = useContext(AppContext);

    useEffect(() => {
        const currentMatch = matches.filter(p => p.id === Number(matchId))[0];
        const currentMatchResults = currentMatch.results.map(m => matchResults.filter(r => r.id === m)[0]);
        const playerNames = [] as string[];

        const playerData = currentMatchResults.map(r => {
            const player = players.filter(p => r.playerId === p.id)[0];
            playerNames.push(player.name);
            return {
                name: player.name,
                pointTotals: getProgressivePointTotals(r.raceResults)
            }
        });

        const trackOrder = currentMatch.trackOrder ||
            (currentMatch.cupOrder && currentMatch.cupOrder.reduce((acc, id) => (
                acc.concat(cups.filter(c => c.id === id)[0].tracks)
            ), [0])) || [];
        const trackNames = trackOrder.map(o => {
            const track = tracks.filter(t => t.id === o)[0];
            return track ? track.altNames[0] : 'ST';
        });
        const results = trackNames.map((t, i) => {
            const resultSet = {
                track: t
            } as ResultSet;
            playerData.forEach(p => {
                resultSet[p.name] = p.pointTotals[i]
            });
            return resultSet;
        });

        setPlayerList(playerNames);
        setResults(results);
    }, [cups, matchId, matches, matchResults, players, setPlayerList, setResults, tracks]);

    return (
        <ResponsiveContainer width='95%' height={250} className='mt-4 mx-auto'>
            <LineChart data={results}>
                <CartesianGrid style={{ stroke: '#666' }} />
                <XAxis dataKey='track' style={{ fill: 'white' }} />
                <YAxis style={{ fill: 'white' }} />
                <Tooltip
                    contentStyle={{ backgroundColor: '#111927', borderRadius: '0.5rem' }}
                    itemStyle={{ padding: 0 }}
                />
                <Legend />
                {playerList.map((p, i) => <Line
                    dataKey={p}
                    stroke={GRAPH_LINE_PROPERTIES[i].color}
                    strokeWidth={2}
                    dot={false}
                    key={p}
                />)}
            </LineChart>
        </ResponsiveContainer>
    );
}

export default MatchGraph;